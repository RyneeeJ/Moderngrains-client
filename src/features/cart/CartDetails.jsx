import { useCartItems } from "./useCartItems";
import OperationsContainer from "../../ui/OperationsContainer";
import DeleteCartButton from "./DeleteCartButton";
import CartList from "./CartList";
import Checkout from "../checkout/Checkout";
import EmptyCart from "./EmptyCart";
import { useEffect, useState } from "react";
import { useConfirmAllItems } from "./useConfirmAllItems";

function CartDetails() {
  const { cartItems, error } = useCartItems();
  const isConfirmedStatus = cartItems.every(
    (item) => item.isConfirmed === true,
  );
  const [isConfirmedAll, setIsConfirmedAll] = useState(isConfirmedStatus);

  const { confirmAll, isConfirming } = useConfirmAllItems();

  useEffect(() => {
    setIsConfirmedAll(isConfirmedStatus);
  }, [isConfirmedStatus]);

  if (error) {
    throw new Error(error.message);
  }
  const isCartEmpty = cartItems.length === 0;

  return (
    <>
      {isCartEmpty && <EmptyCart />}

      {!isCartEmpty && (
        <>
          <OperationsContainer>
            <div
              onClick={() => confirmAll(isConfirmedAll)}
              className="flex cursor-pointer items-center gap-4 px-2 hover:underline"
            >
              <input
                type="checkbox"
                checked={isConfirmedAll}
                disabled={isConfirming}
                onChange={() => confirmAll(isConfirmedAll)}
                className="relative size-5 appearance-none rounded-sm border border-yellow-700 bg-slate-100 transition-all duration-200 after:absolute after:h-full after:w-full after:bg-[url('/check.svg')] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-yellow-700 hover:cursor-pointer hover:ring hover:ring-yellow-500"
              />
              <span className="text-sm font-semibold uppercase tracking-wider sm:text-base md:text-lg">
                Select all
              </span>
            </div>
            <DeleteCartButton cartItems={{ cartItems }} />
          </OperationsContainer>

          <CartList cartItems={cartItems} />
        </>
      )}

      <div className="flex min-h-16 items-center">
        <Checkout cartItems={cartItems} />
      </div>
    </>
  );
}

export default CartDetails;
