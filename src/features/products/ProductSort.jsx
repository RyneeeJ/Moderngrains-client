import Select from "../../ui/Select";
import { useFilterSort } from "../../hooks/useFilterSort";

function ProductSort() {
  const optionsArr = [
    { name: "Low to high price", value: "price-asc" },
    { name: "High to low price", value: "price-desc" },
  ];

  const { handleClick: handleChange, currentFilter: currentSort } =
    useFilterSort("sortBy", optionsArr);
  return (
    <Select
      optionsArr={optionsArr}
      curValue={currentSort}
      handleChange={handleChange}
    />
  );
}

export default ProductSort;
