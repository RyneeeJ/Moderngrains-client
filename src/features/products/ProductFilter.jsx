import Select from "../../ui/Select";
import { useFilterSort } from "./useFilterSort";

function ProductFilter() {
  const optionsArr = [
    { name: "All products", value: "all" },
    { name: "Chairs", value: "chairs" },
    { name: "Tables", value: "tables" },
    { name: "Sofa", value: "sofa" },
    { name: "Wardrobe", value: "wardrobe" },
  ];

  const { handleClick: handleChange } = useFilterSort("category", optionsArr);
  return <Select optionsArr={optionsArr} handleChange={handleChange} />;
}

export default ProductFilter;
