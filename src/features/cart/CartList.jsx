import sofa1 from "../../data/sofa1.jpg";
import table1 from "../../data/table1.jpg";
import chair1 from "../../data/chair1.jpg";
import CartListItem from "./CartListItem";

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
  return (
    <ul className="flex flex-col gap-4">
      {fakeCart.map((product) => (
        <CartListItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default CartList;
