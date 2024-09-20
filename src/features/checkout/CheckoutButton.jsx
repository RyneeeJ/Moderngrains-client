import Button from "../../ui/Button";

function CheckoutButton({ confirmedItems }) {
  const numItems = confirmedItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Button type="checkout">
      Checkout {numItems} item
      {numItems > 1 ? "s" : ""}
    </Button>
  );
}

export default CheckoutButton;
