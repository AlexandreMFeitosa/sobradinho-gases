import SectionTitle from "../../components/common/SectionTitle";
import FAQItem from "../../components/faq/FAQItem";
import Container from "../../components/common/Container";
import { faqs } from "../../data/faqs";

function FAQ() {
  return (
    <main className="bg-gray-50 py-16 md:py-20">
      <Container>
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle>Perguntas e Respostas</SectionTitle>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Encontre respostas para as principais dúvidas sobre nossos
            produtos, serviços e atendimento.
          </p>
        </div>

        {/* Perguntas */}
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default FAQ;