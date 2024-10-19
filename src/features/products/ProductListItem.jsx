import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import QuantityCounter from "../../ui/QuantityCounter";
import AddToCartButton from "../../ui/AddToCartButton";
import ProductTag from "../../ui/ProductTag";

function ProductListItem({ item }) {
  const { name: productName, image, price, isBestSeller, stocks } = item;

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
    <li
      onClick={(e) => {
        // console.log("clicked");
      }}
    >
      <div className="relative aspect-square cursor-pointer overflow-hidden">
        <img
          className="h-full w-full rounded-md object-cover object-bottom transition-all duration-300 hover:scale-110 xs:mb-2"
          src={image}
          alt={`Photo of ${productName}`}
        />
        <AddToCartButton
          setQuantity={setQuantity}
          item={item}
          quantity={quantity}
        />

        {isBestSeller && stocks && <ProductTag type="best" />}
        {!stocks && <ProductTag type="unavailable" />}
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
