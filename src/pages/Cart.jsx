import CartList from "../features/cart/CartList";
import DeleteCartButton from "../features/cart/DeleteCartButton";
import Button from "../ui/Button";
import OperationsContainer from "../ui/OperationsContainer";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

function Cart() {
  return (
    <Section>
      <SectionHeading>My Cart</SectionHeading>

      <OperationsContainer>
        <DeleteCartButton />
      </OperationsContainer>

      <CartList />
    </Section>
  );
}

export default Cart;
