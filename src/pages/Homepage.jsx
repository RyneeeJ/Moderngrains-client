import HeroImage from "../ui/HeroImage";
import BestSellers from "../features/products/BestSellers";
function Homepage() {
  return (
    <div id="hero-section">
      <HeroImage />

      <BestSellers />
    </div>
  );
}

export default Homepage;
