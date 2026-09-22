import Hero from "../../components/sections/Hero";
import FeaturedProducts from "../../components/sections/FeaturedProducts";
import Sectors from "../../components/sections/Sectors";
import About from "../../components/sections/About";

import FAQ from "../../components/sections/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Sectors />
      <About />
      <FAQ />
    </div>
  );
}