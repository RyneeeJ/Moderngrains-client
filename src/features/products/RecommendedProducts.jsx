import { Link } from "react-router-dom";
import Section from "../../ui/Section";
import SectionHeading from "../../ui/SectionHeading";
import { PiArrowRight } from "react-icons/pi";
import ProductList from "./ProductList";

function RecommendedProducts() {
  return (
    <Section>
      <SectionHeading>Recommended for you</SectionHeading>

      <Link
        to="/products"
        className="mb-4 mt-10 flex items-center justify-end gap-3 text-sm hover:underline"
      >
        View all products{" "}
        <span className="inline-block">
          <PiArrowRight />
        </span>
      </Link>

      <ProductList />
    </Section>
  );
}

export default RecommendedProducts;
