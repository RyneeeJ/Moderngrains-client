import sofa1 from "../../data/sofa1.jpg";
import table1 from "../../data/table1.jpg";
import chair1 from "../../data/chair1.jpg";
import CartListItem from "./CartListItem";
import { useCartItems } from "./useCartItems";
import toast from "react-hot-toast";

const fakeCart = [
  {
    productName: "Urban Sleek Sofa",
    price: 20_999,
    image: sofa1,
    quantity: 2,
    id: 1,
  },
  {
    productName: "Urban Sleek Sofa",
    price: 20_999,
    image: table1,
    quantity: 1,
    id: 2,
  },
  {
    productName: "Urban Sleek Sofa",
    price: 20_999,
    image: chair1,
    quantity: 3,
    id: 3,
  },
];
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
