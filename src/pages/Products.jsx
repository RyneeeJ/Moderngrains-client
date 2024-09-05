import ProductFilter from "../features/products/ProductFilter";
import ProductList from "../features/products/ProductList";
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
      <ProductList />
    </Section>
  );
}

export default Products;
