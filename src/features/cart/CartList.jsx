import CartListItem from "./CartListItem";

function CartList({ cartItems }) {
  return (
    <ul className="mb-8 flex max-h-[600px] flex-col gap-4 overflow-y-auto border-y border-stone-200 sm:max-h-[700px] md:mb-14">
      {cartItems.map((product) => (
        <CartListItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default CartList;
