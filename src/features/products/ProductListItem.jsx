import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import QuantityCounter from "../../ui/QuantityCounter";
import AddToCartButton from "../../ui/AddToCartButton";
import ProductTag from "../../ui/ProductTag";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

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
        {/* <AddToCartButton
          isOutOfStock={!stocks}
          setQuantity={setQuantity}
          item={item}
          quantity={quantity}
        /> */}

        {isBestSeller && stocks && <ProductTag type="best" />}
        {!stocks && <ProductTag type="unavailable" />}
      </div>

      <span className="text-xs xs:text-base sm:text-lg">{productName}</span>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold xs:text-lg sm:text-xl">
          {formatCurrency(price)}
        </span>
        {/* {stocks ? (
          <QuantityCounter
            quantity={quantity}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />
        ) : (
          <span>Coming Soon</span>
        )} */}
        <button className="w-1/3 rounded-md bg-stone-800 py-1 transition-all duration-200 hover:bg-stone-700 sm:rounded-lg">
          <PiShoppingCartSimpleBold className="mx-auto size-3.5 text-amber-50 xs:size-5 md:size-6" />
        </button>
      </div>
    </li>
  );
}

export default ProductListItem;
