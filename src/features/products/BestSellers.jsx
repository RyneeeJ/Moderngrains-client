import { Link } from "react-router-dom";
import Section from "../../ui/Section";
import SectionHeading from "../../ui/SectionHeading";
import { PiArrowRight } from "react-icons/pi";
import ProductList from "./ProductList";

function BestSellers() {
  return (
    <Section>
      <SectionHeading>Our Best Sellers</SectionHeading>

      <Link
        to="/products"
        className="mb-4 flex items-center justify-end gap-3 text-sm hover:underline xs:text-base md:mb-6 md:text-lg"
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

export default BestSellers;
