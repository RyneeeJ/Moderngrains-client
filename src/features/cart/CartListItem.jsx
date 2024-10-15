import { formatCurrency } from "../../utils/helpers";
import QuantityCounter from "../../ui/QuantityCounter";
import { PiX } from "react-icons/pi";
import { useDeleteCartItem } from "./useDeleteCartItem";
import { useConfirmItem } from "./useConfirmItem";
import { useUpdateQuantityFromCart } from "./useUpdateQuantityFromCart";
function CartListItem({ product }) {
  const { name, quantity, image, price, id, isConfirmed } = product;

  const { deleteItem, isDeleting } = useDeleteCartItem();

  const { setIsConfirmed, isConfirming } = useConfirmItem();
  function handleDeleteItem(cartItemId) {
    deleteItem(cartItemId);
  }

  const { isUpdating, updateQuantity } = useUpdateQuantityFromCart();

  function handleIncreaseQuantity() {
    if (quantity === 99) return;
    updateQuantity({ currentQuantity: quantity, id, operation: "increase" });
  }
  function handleDecreaseQuantity() {
    if (quantity === 1) return;
    updateQuantity({ currentQuantity: quantity, id, operation: "decrease" });
  }
  return (
    <li className="relative flex">
      <div className="self-center px-2">
        <input
          type="checkbox"
          disabled={isConfirming}
          checked={isConfirmed}
          onChange={() => setIsConfirmed({ curStatus: isConfirmed, id })}
          className="relative size-5 appearance-none rounded-sm border border-yellow-700 bg-slate-100 transition-all duration-200 after:absolute after:h-full after:w-full after:bg-[url('/check.svg')] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-yellow-700 hover:cursor-pointer hover:ring hover:ring-yellow-500"
        />
      </div>

      <div className="flex grow rounded-lg border border-yellow-700 bg-lime-50">
        <div className="aspect-square max-w-20 basis-1/3 xs:max-w-56 md:max-w-32">
          <img
            src={image}
            className="h-full rounded-md border-r border-yellow-700 object-cover object-bottom"
          />
        </div>
        <div className="flex grow flex-col gap-1 p-3 xs:gap-1.5 xs:p-5 sm:gap-3 sm:p-7 md:grid md:grid-cols-2 md:px-10">
          <div className="text-sm xs:text-base sm:text-xl md:text-2xl">
            {name}
          </div>
          <div className="text-zinc-800">
            <span className="text-lg font-semibold xs:text-xl sm:text-2xl md:row-start-2 md:text-3xl">
              {formatCurrency(price)}
            </span>{" "}
            <span className="text-xs italic opacity-75 xs:text-sm sm:text-base md:text-xl">
              per pc
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
        <PiX className="absolute right-1 top-1 size-5 hover:cursor-pointer sm:right-2 sm:top-2 sm:size-6" />
      </button>
    </li>
  );
}

export default CartListItem;
