import Container from "../common/Container";

function Footer() {
  return (
    <footer className="mt-16 bg-[#123b63] text-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              Sobradinho Gases
            </h2>

            <div className="space-y-2 text-sm leading-relaxed text-gray-200">
              <p>Endereço: Rua Exemplo, 123, Sobradinho, DF</p>
              <p>Telefone: (61) 1234-5678</p>
              <p>Email: sobradinhogases@gmail.com</p>
            </div>
          </div>

          <nav className="flex flex-col gap-3 md:items-end">
            <h3 className="mb-1 text-lg font-semibold">
              Navegação
            </h3>

            <a
              href="/sobre"
              className="text-gray-200 transition-colors hover:text-white"
            >
              Sobre
            </a>

            <a
              href="/produtos"
              className="text-gray-200 transition-colors hover:text-white"
            >
              Produtos
            </a>

            <a
              href="/contato"
              className="text-gray-200 transition-colors hover:text-white"
            >
              Contato
            </a>
          </nav>
        </div>

        <div className="border-t border-white/20 py-5 text-center text-sm text-gray-300">
          <p>© 2026 Sobradinho Gases. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
