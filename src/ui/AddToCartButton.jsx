import { useState } from "react";
import { PiSealWarningBold, PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCartItems } from "../features/cart/useCartItems";
import { useAddToCart } from "../features/cart/useAddToCart";
import toast from "react-hot-toast";

const iconClass = "size-6 md:size-7";

function AddToCartButton({ isOutOfStock, item, quantity, setQuantity }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { cartItems, cartId } = useCartItems();
  const { addItem } = useAddToCart();

  const { name, id: productId, stripeId, stocks } = item;

  const itemInCart = cartItems?.find(
    (cartItem) => cartItem.productId === productId,
  );

  function handleAddToCart() {
    if (isOutOfStock) {
      toast.error(`${item.name} is currently out of stock`);

      return;
    }

    if (itemInCart?.quantity + quantity > stocks) {
      toast.error(
        `You already have ${itemInCart.quantity} of this in your cart. Maximum number of stocks reached`,
      );
      setQuantity(1);
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

      setTimeout(() => {
        setIsProcessing(false);
      }, 800);

      setQuantity(1);
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isProcessing}
      className={`mb-3 flex items-center justify-center rounded-md py-2 text-xl font-semibold text-amber-50 transition-all duration-200 md:py-3.5 md:text-2xl md:font-bold ${isOutOfStock ? "bg-red-600 hover:bg-red-700" : "bg-lime-800 hover:bg-lime-900"} gap-2`}
    >
      {isOutOfStock && (
        <>
          <span>
            <PiSealWarningBold className={iconClass} />
          </span>
          <span>Not available</span>
        </>
      )}
      {!isOutOfStock && (
        <>
          <span>
            <PiShoppingCartSimpleBold className={iconClass} />
          </span>
          <span>Add to cart</span>
        </>
      )}
    </button>
  );
}

export default AddToCartButton;
