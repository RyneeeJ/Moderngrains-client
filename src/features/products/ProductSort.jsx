import Select from "../../ui/Select";
import { useFilterSort } from "../../hooks/useFilterSort";

function ProductSort() {
  const optionsArr = [
    { name: "Low to high price", value: "price-asc" },
    { name: "High to low price", value: "price-desc" },
  ];

  const { handleClick: handleChange } = useFilterSort("sortBy", optionsArr);
  return <Select optionsArr={optionsArr} handleChange={handleChange} />;
}

export default ProductSort;
