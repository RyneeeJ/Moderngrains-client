function ConfirmProductListItem({ productName, quantity }) {
  return (
    <li>
      <div className="text-lg sm:text-xl">
        x{quantity} {productName}
      </div>
    </li>
  );
}

export default ConfirmProductListItem;
