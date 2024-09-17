import { Suspense } from "react";
import CartDetails from "../features/cart/CartDetails";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Loader from "../ui/Loader";

function Cart() {
  return (
    <Section>
      <SectionHeading>My Cart</SectionHeading>

      <Suspense fallback={<Loader />}>
        <CartDetails />
      </Suspense>
    </Section>
  );
}

export default Cart;
