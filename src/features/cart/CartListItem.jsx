import { formatCurrency } from "../../utils/helpers";
import QuantityCounter from "../../ui/QuantityCounter";
import { PiXBold } from "react-icons/pi";
import { useDeleteCartItem } from "./useDeleteCartItem";
import { useConfirmItem } from "./useConfirmItem";
import { useUpdateQuantityFromCart } from "./useUpdateQuantityFromCart";
import toast from "react-hot-toast";
import { useEffect } from "react";

function CartListItem({ product }) {
  const { name, quantity, image, price, id, isConfirmed, stocksLeft } = product;
  const { deleteItem, isDeleting } = useDeleteCartItem();
  const { setIsConfirmed, isConfirming } = useConfirmItem();
  const { isUpdating, updateQuantity } = useUpdateQuantityFromCart();

  // This effect makes sure that the quantity of the product in the cart is always less than or equal to the stocks left
  // This can be improved using WEBSOCKETS in order to utilize real-time query invalidation among all users
  // This will suffice for now
  useEffect(() => {
    if (quantity > stocksLeft && quantity !== 0)
      updateQuantity({
        currentQuantity: quantity,
        id,
        newQuantity: stocksLeft,
      });

    if (!quantity) handleDeleteItem(id);
  }, [quantity, stocksLeft, id]);

  function handleIncreaseQuantity() {
    if (quantity >= stocksLeft) {
      toast.error("Max number of stocks reached");
      return;
    }
    updateQuantity({ currentQuantity: quantity, id, operation: "increase" });
  }
  function handleDecreaseQuantity() {
    if (quantity === 1) return;
    updateQuantity({ currentQuantity: quantity, id, operation: "decrease" });
  }
  function handleDeleteItem(cartItemId) {
    deleteItem(cartItemId);
  }
  return (
    <li className="relative flex text-lime-800">
      <div className="self-center px-2">
        <input
          type="checkbox"
          disabled={isConfirming}
          checked={isConfirmed}
          onChange={() => setIsConfirmed({ curStatus: isConfirmed, id })}
          className="relative size-5 appearance-none rounded-sm border border-yellow-700 bg-slate-100 transition-all duration-200 after:absolute after:h-full after:w-full after:bg-[url('/check.svg')] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-yellow-700 hover:cursor-pointer hover:ring hover:ring-yellow-500"
        />
      </div>

      <div className="flex grow rounded-lg border border-lime-800 bg-lime-50">
        <div className="aspect-square max-w-28 basis-1/3 xs:max-w-56 md:max-w-32">
          <img
            src={image}
            className="h-full w-full rounded-md border-r border-lime-800 object-cover object-bottom"
          />
        </div>
        <div className="flex grow flex-col gap-1 p-3 font-semibold xs:gap-1.5 xs:p-5 sm:gap-3 sm:p-7 md:grid md:grid-cols-2 md:px-10">
          <div className="text-sm xs:text-base sm:text-xl md:text-2xl">
            {name}
          </div>
          <div>
            <span className="text-lg font-bold xs:text-xl sm:text-2xl md:row-start-2 md:text-3xl">
              {formatCurrency(price)}
            </span>{" "}
            <span className="text-xs font-semibold italic xs:text-sm sm:text-base md:text-xl">
              / pc
            </span>
          </div>
          <div className="mt-auto flex items-center gap-2 md:mt-0">
            <span className="text-sm sm:text-lg">Quantity: </span>
            <QuantityCounter
              quantity={quantity}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
          </div>
        </div>
      </div>

      <button disabled={isDeleting} onClick={() => handleDeleteItem(id)}>
        <PiXBold className="absolute right-1 top-1 size-5 hover:cursor-pointer sm:right-2 sm:top-2 sm:size-6" />
      </button>
    </li>
  );
}

export default CartListItem;
