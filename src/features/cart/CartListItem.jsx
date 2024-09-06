import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import QuantityCounter from "../../ui/QuantityCounter";
import { PiX } from "react-icons/pi";
function CartListItem({ product }) {
  const [itemConfirmed, setItemConfirmed] = useState(false);

  const { productName: name, quantity, image, price } = product;

  return (
    <li className="relative flex">
      <div className="mr-2 self-center">
        <input
          type="checkbox"
          checked={itemConfirmed}
          onChange={() => setItemConfirmed((confirmed) => !confirmed)}
          className="relative size-5 appearance-none rounded-sm border border-yellow-700 bg-slate-100 transition-all duration-200 after:absolute after:h-full after:w-full after:bg-[url('/check.svg')] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-yellow-700 hover:cursor-pointer hover:ring hover:ring-yellow-500"
        />
      </div>

      <div className="flex grow rounded-md bg-neutral-200">
        <div className="basis-1/3">
          <img
            src={image}
            className="aspect-square h-full rounded-md object-cover object-bottom"
          />
        </div>
        <div className="flex grow flex-col gap-1 p-3 xs:gap-1.5 xs:p-5 sm:gap-3 sm:p-7">
          <div className="text-sm xs:text-base sm:text-xl">{name}</div>
          <div className="text-lg font-semibold text-zinc-800 xs:text-xl sm:text-2xl">
            {formatCurrency(price)}
          </div>
          <div className="mt-auto flex items-center gap-2">
            <span className="text-sm sm:text-lg">Quantity: </span>
            <QuantityCounter quantity={quantity} />
          </div>
        </div>
      </div>

      <button>
        <PiX className="absolute right-1 top-1 size-5 hover:cursor-pointer sm:right-2 sm:top-2 sm:size-6" />
      </button>
    </li>
  );
}

export default CartListItem;
