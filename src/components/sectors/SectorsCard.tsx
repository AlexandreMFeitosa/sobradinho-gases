import Button from "../common/Button";

type SectorsCardProps = {
  id: string;
  name: string;
  description: string;
  image: string;
};

function SectorsCard({
  id,
  name,
  description,
  image,
}: SectorsCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Imagem */}
      <div className="h-56 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-[#123b63]">
          {name}
        </h3>

        <p className="mb-6 flex-1 text-base leading-relaxed text-gray-600">
          {description}
        </p>

        <Button to={`/segmentos/${id}`}>
          Saiba mais
        </Button>
      </div>
    </article>
  );
}

export default SectorsCard;