import Select from "../../ui/Select";
import { useFilterSort } from "../../hooks/useFilterSort";

function ProductFilter() {
  const optionsArr = [
    { name: "All products", value: "all" },
    { name: "Chairs", value: "chairs" },
    { name: "Tables", value: "tables" },
    { name: "Sofa", value: "sofas" },
    { name: "Wardrobe", value: "wardrobes" },
  ];

  const { handleClick: handleChange, currentFilter } = useFilterSort(
    "category",
    optionsArr,
  );
  return (
    <Select
      optionsArr={optionsArr}
      curValue={currentFilter}
      handleChange={handleChange}
    />
  );
}

export default ProductFilter;
