import TotalPrice from "../cart/TotalPrice";
import { useCartItems } from "../cart/useCartItems";
import CheckoutButton from "./CheckoutButton";

function Checkout({ cartItems }) {
  const confirmedItems = cartItems?.filter((item) => item.isConfirmed === true);
  const totalPrice = confirmedItems?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (confirmedItems.length === 0) return null;
  return (
    <div className="flex items-center justify-between">
      <TotalPrice totalPrice={totalPrice} />
      <CheckoutButton confirmedItems={confirmedItems} totalPrice={totalPrice} />
    </div>
  );
}

export default Checkout;
