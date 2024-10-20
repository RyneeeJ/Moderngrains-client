import { PiShoppingCartSimple } from "react-icons/pi";

import { useAddToCart } from "../features/cart/useAddToCart";
import { useCartItems } from "../features/cart/useCartItems";
import { useState } from "react";
import toast from "react-hot-toast";

function AddToCartButton({ item, setQuantity, quantity, isOutOfStock }) {
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
        quantity,
        stripeId,
        cartId,
        cartItemsFinal: cartItems,
      });
      setQuantity(1);

      setTimeout(() => {
        setIsProcessing(false);
      }, 800);
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isProcessing}
      className="absolute right-1 top-1 flex items-center justify-center rounded-full bg-zinc-800 p-1 transition-all duration-200 hover:cursor-pointer hover:bg-zinc-700 xs:p-1.5"
    >
      <PiShoppingCartSimple className="text-amber-50 xs:size-5" />
    </button>
  );
}

export default AddToCartButton;
