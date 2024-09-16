import CartListItem from "./CartListItem";
import { useCartItems } from "./useCartItems";

function CartList() {
  const { cartItems, isLoading, error, isError } = useCartItems();

  if (isLoading) return <div>LOADING CART ITEMS...</div>;

  if (error) {
    console.log("ERROR:", error.message);
    return;
  }

  return (
    <ul className="md:max-h-[750px mb-6 flex max-h-[500px] flex-col gap-4 overflow-y-scroll sm:max-h-[625px]">
      {cartItems.map((product) => (
        <CartListItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default CartList;
