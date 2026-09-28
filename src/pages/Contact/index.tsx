import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import {
  Phone,
  Mail,
  AtSign,
  Clock,
  MapPin,
  MessageSquare,
} from "lucide-react";

function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Cabeçalho */}
          <div className="mb-10 text-center">
            <SectionTitle>Contatos</SectionTitle>

            <p className="mt-3 text-lg text-gray-600">
              Fale com a Sobradinho Gases
            </p>
          </div>

          {/* WhatsApp */}
          <div className="mb-8 rounded-2xl border border-gray-100 border-l-4 border-l-green-500 bg-white p-8 text-center shadow-sm">
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              Fale conosco pelo WhatsApp
            </h2>

            <p className="mx-auto mb-6 max-w-md text-gray-600">
              Tire suas dúvidas, consulte disponibilidade e condições de
              entrega rapidamente.
            </p>

            <a
              href="https://wa.me/556195674355"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-3.5 font-semibold text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg"
            >
              <MessageSquare className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Informações */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Outros canais */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-lg font-bold text-slate-900">
                Outros canais
              </h3>

              <ul className="space-y-5">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="rounded-lg bg-blue-50 p-2.5 text-[#123b63]">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <span className="block text-xs font-medium text-gray-500">
                      Telefone
                    </span>

                    <a
                      href="tel:+556134891364"
                      className="font-semibold transition-colors hover:text-[#123b63]"
                    >
                      (61) 3489-1364
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-3 text-gray-700">
                  <div className="rounded-lg bg-blue-50 p-2.5 text-[#123b63]">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <span className="block text-xs font-medium text-gray-500">
                      E-mail
                    </span>

                    <a
                      href="mailto:sobradinhogases@gmail.com"
                      className="font-semibold transition-colors hover:text-[#123b63]"
                    >
                      sobradinhogases@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-3 text-gray-700">
                  <div className="rounded-lg bg-blue-50 p-2.5 text-[#123b63]">
                    <AtSign className="h-5 w-5" />
                  </div>

                  <div>
                    <span className="block text-xs font-medium text-gray-500">
                      Instagram
                    </span>

                    <a
                      href="https://www.instagram.com/SobradinhoGases2026/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold transition-colors hover:text-[#123b63]"
                    >
                      @SobradinhoGases2026
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Horário */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-slate-900">
                <Clock className="h-5 w-5 text-[#123b63]" />
                Horário de Funcionamento
              </h3>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                <span className="block text-sm font-medium text-gray-500">
                  Atendimento Presencial e Online
                </span>

                <p className="mt-1 font-bold text-slate-900">
                  Segunda a Sexta-feira
                </p>

                <p className="text-lg font-semibold text-[#123b63]">
                  08:00 às 18:00
                </p>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
              <MapPin className="h-5 w-5 text-[#123b63]" />
              Localização
            </h3>

            <p className="mb-4 font-medium text-gray-700">
              Quadra 17 Conjunto I Lote 3 – SOF Sobradinho, Brasília - DF
            </p>

            <a
              href="https://maps.google.com/?q=Quadra+17+Conjunto+I+Lote+3+SOF+Sobradinho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#123b63] underline transition-colors hover:text-blue-700"
            >
              Ver no Google Maps →
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Contact;