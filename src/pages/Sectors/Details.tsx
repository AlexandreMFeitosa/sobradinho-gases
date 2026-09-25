import { useParams } from "react-router-dom";
import { sectors } from "../../data/sectors";
import SectionTitle from "../../components/common/SectionTitle";
import Container from "../../components/common/Container";


export default function SectorDetails() {
  const { id } = useParams();

  const sector = sectors.find((item) => item.id === id);

  if (!sector) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md rounded-xl bg-red-100 p-6 text-center shadow-lg">
          <h1 className="text-xl font-bold text-red-700">
            Setor não encontrado
          </h1>

          <p className="mt-2 text-red-600">
            O setor que você procura não foi encontrado.
          </p>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre as soluções para ${sector.name}.`
  );

  const whatsappUrl = `https://wa.me/5561994262553?text=${whatsappMessage}`;

  return (
    <main>
      <Container>
        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2">
          
          <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-md">
            <img
              src={sector.image}
              alt={sector.name}
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

       
          <div className="flex flex-col justify-center">
            <SectionTitle>{sector.name}</SectionTitle>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {sector.description}
            </p>

            <div className="mt-6">
              <h2 className="text-lg font-bold text-[#123b63]">
                Principais aplicações
              </h2>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
                {sector.applications.map((application) => (
                  <li key={application}>{application}</li>
                ))}
              </ul>
            </div>

            <p className="mb-6 mt-6 text-lg font-semibold text-[#123b63]">
              Entre em contato para consultar disponibilidade e condições.
            </p>

            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
              >
                Solicitar atendimento
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}