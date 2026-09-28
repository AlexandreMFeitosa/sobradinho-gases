import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";

function Rental() {
  return (
    <main className="bg-white">
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle>Locação</SectionTitle>

            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Consulte as opções de locação disponíveis para cilindros e
              soluções relacionadas ao fornecimento de gases.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <img
              src="/pexels-mm-dental-56682202-8260447.jpg"
              alt="Cilindros de gases industriais"
              className="h-[260px] w-full rounded-[14px] object-cover shadow-[0_24px_50px_rgba(0,0,0,0.25)] sm:h-[320px] lg:h-[360px] lg:rounded-[20px]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionTitle>Como funciona?</SectionTitle>

            <p className="mt-4 text-gray-600">
              A disponibilidade e as condições de locação podem variar de
              acordo com a necessidade de cada cliente.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-md">
              <span className="text-sm font-bold text-[#123b63]">
                01
              </span>

              <h3 className="mt-3 text-xl font-bold text-[#123b63]">
                Consulte a disponibilidade
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Entre em contato para informar sua necessidade e verificar as
                opções disponíveis.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-md">
              <span className="text-sm font-bold text-[#123b63]">
                02
              </span>

              <h3 className="mt-3 text-xl font-bold text-[#123b63]">
                Avalie as condições
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                As condições de locação são definidas de acordo com o tipo de
                solução e a necessidade do cliente.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-md">
              <span className="text-sm font-bold text-[#123b63]">
                03
              </span>

              <h3 className="mt-3 text-xl font-bold text-[#123b63]">
                Combine os detalhes
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Após a consulta, alinhe os detalhes de entrega, retirada e
                demais condições diretamente com a equipe.
              </p>
            </article>
          </div>
        </Container>
      </section>
      
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <SectionTitle>Uma solução para diferentes necessidades</SectionTitle>

              <p className="mt-6 leading-relaxed text-gray-600">
                A locação pode ser uma alternativa para empresas e clientes
                que precisam utilizar cilindros ou equipamentos por
                determinado período, sem necessariamente realizar a aquisição.
              </p>

              <p className="mt-4 leading-relaxed text-gray-600">
                Consulte a equipe para verificar se existe uma opção adequada
                para sua necessidade.
              </p>
            </div>

            <div className="rounded-2xl bg-[#123b63] p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold">
                Precisa de uma solução temporária?
              </h3>

              <p className="mt-4 leading-relaxed text-gray-200">
                Entre em contato para consultar disponibilidade, condições e
                possibilidades de locação.
              </p>

              <div className="mt-6">
                <Button to="/contato">
                  Consultar disponibilidade
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Rental;