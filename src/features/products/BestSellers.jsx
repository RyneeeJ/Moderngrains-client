import { Link } from "react-router-dom";
import Section from "../../ui/Section";
import SectionHeading from "../../ui/SectionHeading";
import { PiArrowRight } from "react-icons/pi";
import ProductList from "./ProductList";

import sofa1 from "../../data/sofa1.jpg";
import wardrobe1 from "../../data/wardrobe1.jpg";
import chair1 from "../../data/chair1.jpg";
import table1 from "../../data/table1.jpg";
import { scrollToTop } from "../../utils/helpers";

const fakeBestSellers = [
  {
    name: "Urban Sleek Sofa",
    price: 20_999,
    image: sofa1,
    id: 1,
  },
  {
    name: "Wooden Wardrobe",
    price: 35_999,
    image: wardrobe1,
    id: 2,
  },
  {
    name: "Black Leather Chair",
    price: 8_999,
    image: chair1,
    id: 3,
  },
  {
    name: "Modern Bedside Table",
    price: 10_999,
    image: table1,
    id: 4,
  },
  {
    name: "Urban Sleek Sofa",
    price: 20_999,
    image: sofa1,
    id: 5,
  },
  {
    name: "Wooden Wardrobe",
    price: 35_999,
    image: wardrobe1,
    id: 6,
  },
];

function BestSellers() {
  return (
    <Section>
      <SectionHeading>Our Best Sellers</SectionHeading>

      <div onClick={scrollToTop}>
        <Link
          to="/products"
          className="mb-4 flex items-center justify-end gap-3 text-sm hover:underline xs:text-base md:mb-6 md:text-lg"
        >
          View all products{" "}
          <span className="inline-block">
            <PiArrowRight />
          </span>
        </Link>
      </div>

      <ProductList productsArr={fakeBestSellers} />
    </Section>
  );
}

export default BestSellers;
