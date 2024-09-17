import { Suspense } from "react";
import AllProducts from "../features/products/AllProducts";
import ProductFilter from "../features/products/ProductFilter";

import ProductSort from "../features/products/ProductSort";
import OperationsContainer from "../ui/OperationsContainer";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Loader from "../ui/Loader";

function Products() {
  return (
    <Section>
      <SectionHeading>Shop</SectionHeading>

      <OperationsContainer>
        <ProductFilter />
        <ProductSort />
      </OperationsContainer>
      <Suspense fallback={<Loader />}>
        <AllProducts />
      </Suspense>
    </Section>
  );
}

export default Products;
