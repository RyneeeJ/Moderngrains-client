import Button from "../ui/Button";
import RecommendedProducts from "../features/products/RecommendedProducts";
import { useSearchParams } from "react-router-dom";

function Homepage() {
  return (
    <div id="hero-section">
      <div className="relative z-10 h-[38rem] w-full bg-[url('/hero-img.jpg')] bg-cover bg-center px-8 py-10 before:absolute before:inset-0 before:-z-20 before:block before:bg-gradient-to-b before:from-yellow-700 before:to-neutral-300 before:opacity-30 before:content-['']">
        <h1 className="mt-10 text-3xl font-light text-amber-50">
          Effortless elegance, purely minimal
        </h1>

        <Button
          className="absolute bottom-[3rem] right-[1.5rem]"
          type="hero-cta"
        >
          Shop now
        </Button>
      </div>

      <RecommendedProducts />
    </div>
  );
}

export default Homepage;
