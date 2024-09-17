import HeroImage from "../ui/HeroImage";
import BestSellers from "../features/products/BestSellers";
import { Suspense } from "react";
import Loader from "../ui/Loader";

function Homepage() {
  return (
    <div id="hero-section">
      <HeroImage />

      <Suspense fallback={<Loader />}>
        <BestSellers />
      </Suspense>
    </div>
  );
}

export default Homepage;
