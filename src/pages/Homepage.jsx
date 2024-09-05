import RecommendedProducts from "../features/products/RecommendedProducts";
import HeroImage from "../ui/HeroImage";

function Homepage() {
  return (
    <div id="hero-section">
      <HeroImage />

      <RecommendedProducts />
    </div>
  );
}

export default Homepage;
