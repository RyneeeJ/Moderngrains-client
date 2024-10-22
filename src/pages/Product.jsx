import { Suspense } from "react";
import Section from "../ui/Section";
import ProductDetails from "../features/products/ProductDetails";
import Loader from "../ui/Loader";

function Product() {
  return (
    <Section>
      <Suspense fallback={<Loader />}>
        <ProductDetails />
      </Suspense>
    </Section>
  );
}

export default Product;
