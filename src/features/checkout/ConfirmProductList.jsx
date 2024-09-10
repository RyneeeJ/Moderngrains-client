import ConfirmProductListItem from "./ConfirmProductListItem";

function ConfirmProductList({ fakeCheckout }) {
  return (
    <ul>
      {fakeCheckout.map((product) => (
        <ConfirmProductListItem
          product={product}
          key={product.id}
          productName={product.productName}
          quantity={product.quantity}
        />
      ))}
    </ul>
  );
}

export default ConfirmProductList;
