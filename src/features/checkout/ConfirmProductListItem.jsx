function ConfirmProductListItem({ productName, quantity }) {
  return (
    <li>
      <div className="text-lg">
        x{quantity} {productName}
      </div>
    </li>
  );
}

export default ConfirmProductListItem;
