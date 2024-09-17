import CartListItem from "./CartListItem";
import { useCartItems } from "./useCartItems";

function CartList({ cartItems }) {
  return (
    <ul className="md:max-h-[750px mb-6 flex max-h-[500px] flex-col gap-4 overflow-y-scroll sm:max-h-[625px]">
      {cartItems.map((product) => (
        <CartListItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default CartList;
