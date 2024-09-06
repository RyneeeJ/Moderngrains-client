import CartList from "../features/cart/CartList";
import CheckoutButton from "../features/cart/CheckoutButton";
import DeleteCartButton from "../features/cart/DeleteCartButton";
import TotalPrice from "../features/cart/TotalPrice";
import PaymentMethod from "../features/payment/PaymentMethod";

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

      <PaymentMethod />

      <div className="flex items-center justify-between">
        <TotalPrice />
        <CheckoutButton />
      </div>
    </Section>
  );
}

export default Cart;
