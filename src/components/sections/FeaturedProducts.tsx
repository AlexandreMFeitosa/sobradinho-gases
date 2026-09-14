import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import ProductCard from "../products/ProductCard";
import { products } from "../../data/products";

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <Container>
        <div className="featured-products-header">
          <SectionTitle>Nossos Produtos</SectionTitle>
          
          <p>
            Conheça algumas das nossas principais soluções.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>

        <div className="featured-products-action">
          <Button to={"/produtos"}>Ver Produtos</Button>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProducts;
