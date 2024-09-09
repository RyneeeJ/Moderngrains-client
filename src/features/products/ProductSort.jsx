import Select from "../../ui/Select";
import { useFilter } from "./useFilter";

function ProductSort() {
  const optionsArr = [
    { name: "Low to high price", value: "price-asc" },
    { name: "High to low price", value: "price-desc" },
  ];

  const { handleClick: handleChange } = useFilter("sortBy", optionsArr);
  return <Select optionsArr={optionsArr} handleChange={handleChange} />;
}

export default ProductSort;
