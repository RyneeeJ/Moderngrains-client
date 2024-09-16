import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import QuantityCounter from "../../ui/QuantityCounter";
import AddToCartButton from "../../ui/AddToCartButton";

function ProductListItem({ item }) {
  const { name: productName, image, price } = item;
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
        <AddToCartButton
          setQuantity={setQuantity}
          item={item}
          quantity={quantity}
        />
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
