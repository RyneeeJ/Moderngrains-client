import { PiShoppingCartSimple } from "react-icons/pi";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import QuantityCounter from "../../ui/QuantityCounter";

function ProductListItem({ image, productName, price }) {
  const [quantity, setQuantity] = useState(1);

  function handleIncreaseQuantity() {
    if (quantity === 99) return;
    setQuantity((count) => count + 1);
  }

  function handleDecreaseQuantity() {
    if (quantity === 1) return;
    setQuantity((count) => count - 1);
  }

  return (
    <li>
      <div className="relative">
        <img
          className="aspect-square rounded-md object-cover object-bottom xs:mb-2"
          src={image}
          alt={`Photo of ${productName}`}
        />
        <button className="absolute right-1 top-1 flex items-center justify-center rounded-full bg-zinc-800 p-1 hover:cursor-pointer xs:p-1.5">
          <PiShoppingCartSimple className="text-amber-50 xs:size-5" />
        </button>
      </div>

      <span className="text-xs xs:text-base sm:text-lg">{productName}</span>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold xs:text-lg sm:text-xl">
          {formatCurrency(price)}
        </span>
        <QuantityCounter
          quantity={quantity}
          onIncrease={handleIncreaseQuantity}
          onDecrease={handleDecreaseQuantity}
        />
      </div>
    </li>
  );
}

export default ProductListItem;
