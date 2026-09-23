import Button from "../common/Button";

type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  image: string;
};

function ProductCard({
  id,
  name,
  description,
  image,
}: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-64 items-center justify-center bg-gray-50 p-8">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-[#123b63]">
          {name}
        </h3>

        <p className="mb-6 flex-1 text-base leading-relaxed text-gray-600">
          {description}
        </p>

        <Button to={`/produto/${id}`}>
          Saiba mais
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;