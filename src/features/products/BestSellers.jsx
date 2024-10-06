import { Link } from "react-router-dom";
import { PiArrowRight } from "react-icons/pi";

import { scrollToTop } from "../../utils/helpers";
import { useBestSellers } from "./useBestSellers";

import SectionHeading from "../../ui/SectionHeading";
import ProductList from "./ProductList";

function BestSellers() {
  const { data: bestSellers, error } = useBestSellers();

  if (error) {
    console.log("ERROR:", error.message);
    throw new Error(error.message);
  }

  return (
    <>
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

      <ProductList productsArr={bestSellers} />
    </>
  );
}

export default BestSellers;
