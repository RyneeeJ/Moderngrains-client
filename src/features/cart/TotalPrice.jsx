import { formatCurrency } from "../../utils/helpers";

function TotalPrice({ totalPrice }) {
  return (
    <div className="flex flex-col text-lime-800 sm:flex-row sm:items-center sm:gap-3">
      <span className="text-sm xs:text-base sm:text-lg md:text-xl">
        Total Price:{" "}
      </span>{" "}
      <span className="text-xl font-semibold xs:text-2xl xs:font-bold sm:text-3xl md:text-4xl">
        {formatCurrency(totalPrice)}
      </span>
    </div>
  );
}

export default TotalPrice;
