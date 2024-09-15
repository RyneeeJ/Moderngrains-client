import { PiShoppingCartSimple } from "react-icons/pi";
import { useAddToCart } from "../features/cart/useAddToCart";

function AddToCartButton({ quantity, productId, name, setQuantity }) {
  const { isAddingToCart, addItem } = useAddToCart();

  function handleAddToCart() {
    addItem({ productId, quantity, name });
    setQuantity(1);
  }
  return (
    <button
      onClick={handleAddToCart}
      disabled={isAddingToCart}
      className="absolute right-1 top-1 flex items-center justify-center rounded-full bg-zinc-800 p-1 transition-all duration-200 hover:cursor-pointer hover:bg-zinc-700 xs:p-1.5"
    >
      <PiShoppingCartSimple className="text-amber-50 xs:size-5" />
    </button>
  );
}

export default AddToCartButton;
