import { useState } from "react";
import {
  PiSealWarning,
  PiSealWarningBold,
  PiShoppingCartSimpleBold,
} from "react-icons/pi";
import { useCartItems } from "../features/cart/useCartItems";
import { useAddToCart } from "../features/cart/useAddToCart";
import toast from "react-hot-toast";

function AddToCartButtonSmall({ item, isOutOfStock }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const { cartItems, cartId } = useCartItems();
  const { addItem } = useAddToCart();

  const { name, id: productId, stripeId } = item;

  const iconClass = "mx-auto size-3.5 xs:size-5 md:size-6 ";
  function handleAddToCart() {
    if (isOutOfStock) {
      toast.error(`${name} is currently out of stock`);
      return;
    }
    if (!isProcessing) {
      setIsProcessing(true);
      addItem({
        productId,
        name,
        quantity: 1,
        stripeId,
        cartId,
        cartItemsFinal: cartItems,
      });

      setTimeout(() => {
        setIsProcessing(false);
      }, 800);
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isProcessing}
      className={`w-1/3 rounded-md py-1 transition-all duration-200 sm:rounded-lg ${isProcessing && "cursor-not-allowed"} ${isOutOfStock ? "bg-red-600 hover:bg-red-700" : "bg-lime-800 hover:bg-lime-900"}`}
    >
      {isOutOfStock ? (
        <PiSealWarningBold className={iconClass + "text-red-100"} />
      ) : (
        <PiShoppingCartSimpleBold className={iconClass + "text-amber-50"} />
      )}
    </button>
  );
}

export default AddToCartButtonSmall;
