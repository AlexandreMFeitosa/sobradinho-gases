import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import ProductCard from "../../components/products/ProductCard";
import { products } from "../../data/products";

function Products() {
  return (
    <main className="bg-gray-50 py-12 md:py-16">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionTitle>Nossos Produtos</SectionTitle>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Soluções em gases medicinais e industriais para diferentes
            necessidades profissionais e comerciais.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default Products;