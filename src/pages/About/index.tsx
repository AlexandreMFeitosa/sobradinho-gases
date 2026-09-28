import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";

function About() {
  return (
    <main className="bg-white">
      {/* Apresentação */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Imagem */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/gases-sobre.jpg"
                alt="Sobradinho Gases"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>

            {/* Conteúdo */}
            <div>
              <SectionTitle>Sobre a Sobradinho Gases</SectionTitle>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  A Sobradinho Gases atua no fornecimento de gases industriais
                  e medicinais para diferentes necessidades e segmentos.
                </p>

                <p>
                  Nosso objetivo é oferecer soluções adequadas para empresas,
                  instituições de saúde, laboratórios e outros clientes que
                  necessitam de gases com segurança, praticidade e
                  confiabilidade.
                </p>

                <p>
                  Trabalhamos buscando oferecer um atendimento próximo e
                  eficiente, auxiliando nossos clientes na escolha das
                  melhores soluções para suas necessidades.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Diferenciais */}
      <section className="bg-gray-50 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle>Por que escolher a Sobradinho Gases?</SectionTitle>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Soluções pensadas para atender diferentes necessidades com
              qualidade e atenção ao cliente.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 text-center shadow-md">
              <h3 className="text-xl font-bold text-[#123b63]">
                Atendimento próximo
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Atendimento direto para entender as necessidades de cada
                cliente.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 text-center shadow-md">
              <h3 className="text-xl font-bold text-[#123b63]">
                Soluções variadas
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Gases industriais e medicinais para diferentes aplicações e
                segmentos.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 text-center shadow-md">
              <h3 className="text-xl font-bold text-[#123b63]">
                Compromisso
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Buscamos oferecer um serviço eficiente e uma experiência
                confiável aos nossos clientes.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* Contato */}
      <section className="border-t border-gray-200 bg-gray-50 py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#123b63]">
              Precisa de gases para sua empresa?
            </h2>

            <p className="mt-3 text-gray-600">
              Entre em contato e consulte nossas soluções e condições.
            </p>

            <div className="mt-6 flex justify-center">
              <Button to="/contato">
                Entre em contato
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default About;