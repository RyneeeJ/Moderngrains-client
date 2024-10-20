import { useState } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCartItems } from "../features/cart/useCartItems";
import { useAddToCart } from "../features/cart/useAddToCart";

function AddToCartButtonSmall({ item, isOutOfStock }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const { cartItems, cartId } = useCartItems();
  const { addItem } = useAddToCart();

  const { name, id: productId, stripeId } = item;

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
      className={`w-1/3 rounded-md bg-stone-800 py-1 transition-all duration-200 hover:bg-stone-700 sm:rounded-lg ${isProcessing && "cursor-not-allowed"}`}
    >
      <PiShoppingCartSimpleBold className="mx-auto size-3.5 text-amber-50 xs:size-5 md:size-6" />
    </button>
  );
}

export default AddToCartButtonSmall;
