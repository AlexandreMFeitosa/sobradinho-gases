import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import ProductCard from "../products/ProductCard";
import { products } from "../../data/products";

function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionTitle>Nossos Produtos</SectionTitle>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Conheça algumas das nossas principais soluções.
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

        <div className="mt-10 flex justify-center">
          <Button to="/produtos">Ver Produtos</Button>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;