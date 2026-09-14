import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import ProductCard from "../../components/products/ProductCard";
import { products } from "../../data/products";

function index() {
  return (
    <main>
      <Container>
        <SectionTitle>Produtos</SectionTitle>

        <p>Confira nossos produtos e soluções disponíveis!</p>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image} />
          ))}
        </div>

      </Container>
    </main>
  )
}

export default index;