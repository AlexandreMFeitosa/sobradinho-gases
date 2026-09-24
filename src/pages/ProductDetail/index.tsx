import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import SectionTitle from "../../components/common/SectionTitle";
import Container from "../../components/common/Container";

export default function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((item) => item.id === slug);

  // Tratamento de erro, em caso de não encontrar o produto
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md rounded-xl bg-red-400 p-6 text-center shadow-lg">
          Produto não encontrado.
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de fazer um orçamento de ${product.name}.`
  );

  const whatsappUrl = `https://wa.me/5561994262553?text=${whatsappMessage}`;

  return (
    <main>
      <Container>
        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <SectionTitle>{product.name}</SectionTitle>

            <p className="mt-4 text-gray-600">
              {product.description}
            </p>

            <p className="mb-6 mt-4 text-lg font-semibold text-[#123b63]">
              Entre em contato para consultar disponibilidade e condições.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
            >
              Faça um orçamento
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}