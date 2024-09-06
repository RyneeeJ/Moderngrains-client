import { formatCurrency } from "../../utils/helpers";

function TotalPrice() {
  return (
    <div>
      <span>Total Price: </span> <span>{formatCurrency(29999)}</span>
    </div>
  );
}

export default TotalPrice;
