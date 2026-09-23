import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function About() {
  return (
    <section className="about py-16">
      <Container>
        <SectionTitle>Sobre</SectionTitle>

        <div className="about-content grid items-center gap-10 md:grid-cols-2">
          <div className="about-text">
            <h3 className="mb-6 text-2xl font-bold leading-relaxed text-[#123b63]">
              Nossa loja surgiu com o objetivo de oferecer produtos de
              qualidade e atendimento excepcional aos nossos clientes.
            </h3>

            <Button>Saiba mais</Button>
          </div>

          <div className="about-image overflow-hidden rounded-2xl">
            <img
              src="/gases-sobre.jpg"
              alt="Imagem da loja"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;

