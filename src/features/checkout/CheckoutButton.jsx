import Button from "../../ui/Button";

function CheckoutButton({ onClick }) {
  return (
    <Button onClick={onClick} type="checkout">
      Checkout 4 items
    </Button>
  );
}

export default CheckoutButton;
