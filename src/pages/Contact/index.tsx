import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import { Phone, Mail, AtSign, Clock, MapPin, MessageSquare } from "lucide-react";

function Contact() {
  return (
    <main className="py-12 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-10">
            <SectionTitle>Contatos</SectionTitle>
            <p className="mt-2 text-gray-600 text-lg">
              Fale com a Sobradinho Gases
            </p>
          </div>

          {/* Destaque WhatsApp */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-center mb-8 border-l-4 border-l-green-500">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Fale conosco pelo WhatsApp
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Tire suas dúvidas, consulte disponibilidade e condições de entrega rapidamente.
            </p>
            <a
              href="https://wa.me/556195674355"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
            >
              <MessageSquare className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Grid de Informações Secundárias */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Outros Canais */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                Outros Canais
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="p-2.5 bg-blue-50 text-blue-900 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium">Telefone</span>
                    <a href="tel:+556134891364" className="font-semibold hover:text-blue-900 transition-colors">
                      (61) 3489-1364
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-3 text-gray-700">
                  <div className="p-2.5 bg-blue-50 text-blue-900 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium">E-mail</span>
                    <a href="mailto:sobradinhogases@gmail.com" className="font-semibold hover:text-blue-900 transition-colors">
                      sobradinhogases@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-3 text-gray-700">
                  <div className="p-2.5 bg-blue-50 text-blue-900 rounded-lg">
                    <AtSign className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-medium">Instagram</span>
                    <a
                      href="https://www.instagram.com/SobradinhoGases2026/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-blue-900 transition-colors"
                    >
                      @SobradinhoGases2026
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Horário de Funcionamento */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-900" />
                  Horário de Funcionamento
                </h3>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="block text-sm font-medium text-gray-500">Atendimento Presencial e Online</span>
                  <p className="text-slate-900 font-bold text-base mt-1">Segunda a Sexta-feira</p>
                  <p className="text-blue-900 font-semibold text-lg">08:00 às 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-900" />
              Localização
            </h3>
            <p className="text-gray-700 font-medium mb-4">
              Quadra 17 Conjunto I Lote 3 – SOF Sobradinho, Brasília - DF
            </p>
            <a
              href="https://maps.google.com/?q=Quadra+17+Conjunto+I+Lote+3+SOF+Sobradinho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-700 underline"
            >
              Ver no Google Maps &rarr;
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Contact;