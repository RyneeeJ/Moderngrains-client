import AllProducts from "../features/products/AllProducts";
import ProductFilter from "../features/products/ProductFilter";

import ProductSort from "../features/products/ProductSort";
import OperationsContainer from "../ui/OperationsContainer";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

function Products() {
  return (
    <Section>
      <SectionHeading>Shop</SectionHeading>

      <OperationsContainer>
        <ProductFilter />
        <ProductSort />
      </OperationsContainer>
      <AllProducts />
    </Section>
  );
}

export default Products;
