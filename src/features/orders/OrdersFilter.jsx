import { useFilterSort } from "../../hooks/useFilterSort";
import OrdersFilterButton from "./OrdersFilterButton";

const options = [
  {
    filterName: "All",
    value: "all",
  },
  {
    filterName: "Completed",
    value: "completed",
  },
  {
    filterName: "Pending",
    value: "pending",
  },
];

function OrdersFilter() {
  const { handleClick, currentFilter } = useFilterSort("orders", options);
  return (
    <div className="ml-auto rounded-md bg-yellow-600 bg-opacity-45 p-1 text-sm">
      {options.map((option) => (
        <OrdersFilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          currentFilter={currentFilter}
          value={option.value}
        >
          {option.filterName}
        </OrdersFilterButton>
      ))}
    </div>
  );
}

export default OrdersFilter;
