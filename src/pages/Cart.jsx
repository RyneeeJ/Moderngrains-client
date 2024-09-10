import CartList from "../features/cart/CartList";
import DeleteCartButton from "../features/cart/DeleteCartButton";
import TotalPrice from "../features/cart/TotalPrice";
import PaymentMethodButton from "../features/payment/PaymentMethodButton";
import ProfileDetailsContainer from "../features/profile/ProfileDetailsContainer";
import Checkout from "../features/checkout/Checkout";

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
        <Checkout />
      </div>
    </Section>
  );
}

export default Cart;
