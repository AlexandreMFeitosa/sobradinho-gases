import { Link } from "react-router-dom";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  to?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  to,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-[#123b63] text-white hover:bg-[#0b2947]",
    secondary:
      "border border-[#123b63] bg-transparent text-[#123b63] hover:bg-[#123b63] hover:text-white",
  };

  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-300 cursor-pointer hover:-translate-y-0.5";

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}