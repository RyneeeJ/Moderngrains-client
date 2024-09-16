import CartList from "../features/cart/CartList";
import DeleteCartButton from "../features/cart/DeleteCartButton";
import { useCartItems } from "../features/cart/useCartItems";
import Checkout from "../features/checkout/Checkout";

import PaymentMethodButton from "../features/payment/PaymentMethodButton";
import ProfileDetailsContainer from "../features/profile/ProfileDetailsContainer";

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

      <ProfileDetailsContainer label="Select Payment Method">
        <PaymentMethodButton />
      </ProfileDetailsContainer>

      <Checkout />
    </Section>
  );
}

export default Cart;
