import ConfirmProductListItem from "./ConfirmProductListItem";

function ConfirmProductList({ checkoutItems }) {
  return (
    <ul>
      {checkoutItems.map((product) => (
        <ConfirmProductListItem
          product={product}
          key={product.id}
          productName={product.name}
          quantity={product.quantity}
        />
      ))}
    </ul>
  );
}

export default ConfirmProductList;
