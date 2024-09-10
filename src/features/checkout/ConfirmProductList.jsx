import ConfirmProductListItem from "./ConfirmProductListItem";

function ConfirmProductList() {
  const fakeCheckout = [
    {
      productName: "Urban Sleek Sofa",
      quantity: 2,
      price: 20_999,
      id: 1,
    },
    {
      productName: "Modern Black Chair",
      quantity: 4,
      price: 16_999,
      id: 2,
    },
  ];
  return (
    <ul>
      {fakeCheckout.map((product) => (
        <ConfirmProductListItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default ConfirmProductList;
