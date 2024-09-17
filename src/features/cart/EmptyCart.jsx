import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <p className="mx-auto max-w-80 text-center xs:max-w-96 sm:max-w-none sm:text-lg">
      No items in your cart yet. Click to{" "}
      <span className="font-semibold italic hover:underline">
        <Link to="/products">Add some</Link>
      </span>{" "}
      elegant furnitures to your home! 😊
    </p>
  );
}

export default EmptyCart;
