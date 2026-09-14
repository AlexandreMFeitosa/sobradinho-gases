import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import SectionTitle from "../../components/common/SectionTitle";
import Container from "../../components/common/Container";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((item) => item.id === slug);

  // TRatamento de erro, em caso de não encontrar o produto
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="max-w-md w-full bg-red-400 rounded-xl shadow-lg p-6 text-center">
          Produto não encontrado.
        </div>
      </div >
    );
  };

  return (
    <main>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="flex flex-col justify-center">
            <SectionTitle>{product.name}</SectionTitle>
            <p>
              {product.description}
            </p>
            <p className="mt-4 mb-6 text-lg font-semibold">
              Entre em contato para consultar disponibilidade e condições.
            </p>
            <a href="https://wa.me/5561994262553" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded font-medium transition-colors
cursor-pointer inline-flex items-center justify-center text-white bg-green-600 hover:bg-green-700">
              Faça um orçamento
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}