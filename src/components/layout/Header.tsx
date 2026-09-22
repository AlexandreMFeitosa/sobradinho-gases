import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Início", path: "/" },
  { label: "Produtos", path: "/produtos" },
  { label: "Locação", path: "/locacao" },
  { label: "Segmentos", path: "/segmentos" },
  { label: "Sobre", path: "/sobre" },
  { label: "FAQ", path: "/faq" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#123b63] text-white shadow-md">
      <div className="mx-auto max-w-7xl px-6">

        {/* Barra principal */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-wide text-[#7ee2a8]"
          >
            SOBRADINHO GASES
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden items-center gap-7 md:flex">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? "text-[#7ee2a8]"
                      : "text-white hover:text-[#7ee2a8]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Contato Desktop */}
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                `rounded-lg px-5 py-2.5 font-semibold text-white transition-colors ${
                  isActive
                    ? "bg-[#176331]"
                    : "bg-[#1f7a3d] hover:bg-[#176331]"
                }`
              }
            >
              Contato
            </NavLink>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-[#0b2947] md:hidden"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="border-t border-white/10 pb-5 pt-4 md:hidden">
            <div className="flex flex-col gap-2">

              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-[#7ee2a8]"
                        : "text-white hover:bg-white/5 hover:text-[#7ee2a8]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Contato Mobile */}
              <NavLink
                to="/contato"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `mt-2 rounded-lg px-4 py-3 text-center font-semibold text-white transition-colors ${
                    isActive
                      ? "bg-[#176331]"
                      : "bg-[#1f7a3d] hover:bg-[#176331]"
                  }`
                }
              >
                Contato
              </NavLink>

            </div>
          </nav>
        )}
      </div>
    </header>
  );
}