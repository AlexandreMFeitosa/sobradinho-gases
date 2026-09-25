import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { sectors } from "../../data/sectors";
import SectorsCard from "../sectors/SectorsCard";

function Sectors() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionTitle>Setores</SectionTitle>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Soluções em gases para diferentes necessidades e segmentos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <SectorsCard
              key={sector.id}
              id={sector.id}
              name={sector.name}
              description={sector.description}
              image={sector.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Sectors;