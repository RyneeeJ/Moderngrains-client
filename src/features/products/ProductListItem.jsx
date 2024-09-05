import { PiShoppingCartSimple } from "react-icons/pi";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import QuantityCounter from "../../ui/QuantityCounter";

function ProductListItem({ image, productName, price }) {
  const [quantity, setQuantity] = useState(0);

  function handleIncreaseQuantity() {
    setQuantity((count) => count + 1);
  }

  function handleDecreaseQuantity() {
    if (!quantity) return;
    setQuantity((count) => count - 1);
  }

  return (
    <li>
      <div className="relative">
        <img
          className="xs:mb-2 aspect-square rounded-md object-cover object-bottom"
          src={image}
          alt={productName}
        />
        <button className="xs:p-1.5 absolute right-1 top-1 flex items-center justify-center rounded-full bg-zinc-800 p-1 hover:cursor-pointer">
          <PiShoppingCartSimple className="xs:size-5 text-amber-50" />
        </button>
      </div>

      <span className="xs:text-base text-xs sm:text-lg">{productName}</span>

      <div className="flex items-center justify-between">
        <span className="xs:text-lg text-sm font-semibold sm:text-xl">
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
