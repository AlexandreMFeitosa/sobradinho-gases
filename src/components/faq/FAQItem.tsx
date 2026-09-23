type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-semibold text-[#123b63]">
        <span>{question}</span>

        <span className="text-2xl font-normal transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="border-t border-gray-100 px-6 py-5">
        <p className="leading-relaxed text-gray-600">
          {answer}
        </p>
      </div>
    </details>
  );
}

export default FAQItem;
