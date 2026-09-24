import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0b2947] via-[#123b63] to-[#174d76] px-0 py-[52px] md:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="mx-auto max-w-[700px] text-center lg:mx-0 lg:max-w-[620px] lg:text-left">
            <span className="mb-5 inline-block text-[0.85rem] font-bold tracking-[2px] text-[#8ed6a2]">
              SOBRADINHO GASES
            </span>

            <h1 className="mb-6 text-[2.35rem] font-bold uppercase leading-[1.12] text-white sm:text-[2.6rem] lg:text-[clamp(2.4rem,5vw,4.3rem)]">
              Soluções em gases
              <span className="block text-[#8ed6a2]">
                industriais e medicinais
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-[520px] text-[0.95rem] leading-[1.8] text-[#d8e5ef] lg:mx-0 lg:text-[1.05rem]">
              Produtos e soluções confiáveis para hospitais, clínicas,
              empresas e diferentes setores industriais.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button>Conheça nossos produtos</Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:mx-0">
            <div className="absolute inset-0 right-[-10px] top-3 rounded-[14px] border-2 border-[#8ed6a2]/35 sm:right-[-15px] sm:top-4 lg:right-[-20px] lg:top-6 lg:rounded-[20px]" />

            <img
              src="/pexels-mm-dental-56682202-8260447.jpg"
              alt="Cilindros de gases industriais"
              className="relative z-10 h-[260px] w-full rounded-[14px] object-cover shadow-[0_24px_50px_rgba(0,0,0,0.25)] sm:h-[320px] lg:h-[360px] lg:rounded-[20px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;