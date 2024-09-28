import HeroImage from "../ui/HeroImage";
import BestSellers from "../features/products/BestSellers";
import { Suspense } from "react";
import Loader from "../ui/Loader";
import Section from "../ui/Section";

function Homepage() {
  return (
    <div id="hero-section">
      <HeroImage />

      <Section>
        <Suspense fallback={<Loader />}>
          <BestSellers />
        </Suspense>
      </Section>
    </div>
  );
}

export default Homepage;
