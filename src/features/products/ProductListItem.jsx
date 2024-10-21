import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import QuantityCounter from "../../ui/QuantityCounter";
import AddToCartButton from "../../ui/AddToCartButton";
import ProductTag from "../../ui/ProductTag";
import AddToCartButtonSmall from "../../ui/AddToCartButtonSmall";

function ProductListItem({ item }) {
  const [quantity, setQuantity] = useState(1);

  const { name: productName, image, price, isBestSeller, stocks } = item;

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
      <div className="relative aspect-square cursor-pointer overflow-hidden">
        <img
          className="h-full w-full rounded-md object-cover object-bottom transition-all duration-300 hover:scale-110 xs:mb-2"
          src={image}
          alt={`Photo of ${productName}`}
        />

        {isBestSeller && stocks && <ProductTag type="best" />}
        {!stocks && <ProductTag type="unavailable" />}
      </div>

      <span className="text-xs xs:text-base sm:text-lg">{productName}</span>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold xs:text-lg sm:text-xl">
          {formatCurrency(price)}
        </span>
        <AddToCartButtonSmall item={item} isOutOfStock={!stocks} />
      </div>
      {/* <div>
          Stocks: {stocks} {stocks === 1 && "unit"} {stocks > 1 && "units"}{" "}
          {!stocks && null} left
        </div> */}
    </li>
  );
}

export default ProductListItem;
