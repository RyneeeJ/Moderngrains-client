import OperationsContainer from "../../ui/OperationsContainer";
import DeleteCartButton from "./DeleteCartButton";
import CartList from "./CartList";

import Checkout from "../checkout/Checkout";

import { useCartItems } from "./useCartItems";
import EmptyCart from "./EmptyCart";

function CartDetails() {
  const { cartItems, error } = useCartItems();

  if (error) {
    console.log("ERROR:", error.message);
  }

  const isCartEmpty = cartItems.length === 0;
  return (
    <>
      {isCartEmpty && <EmptyCart />}

      {!isCartEmpty && (
        <>
          <OperationsContainer>
            <DeleteCartButton cartItems={{ cartItems }} />
          </OperationsContainer>

          <CartList cartItems={cartItems} />
        </>
      )}

      <Checkout cartItems={cartItems} />
    </>
  );
}

export default CartDetails;
