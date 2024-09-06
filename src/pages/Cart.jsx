import CartList from "../features/cart/CartList";
import CheckoutButton from "../features/cart/CheckoutButton";
import DeleteCartButton from "../features/cart/DeleteCartButton";
import TotalPrice from "../features/cart/TotalPrice";

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

      <div className="flex items-center justify-between">
        <TotalPrice />
        <CheckoutButton />
      </div>
    </Section>
  );
}

export default Cart;
