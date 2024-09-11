import Select from "../../ui/Select";
import { useFilterSort } from "../../hooks/useFilterSort";
import { useSearchParams } from "react-router-dom";

function ProductFilter() {
  const [searchParams] = useSearchParams();

  // when the page loaded, get current filter value from the URL and set it as the default value for the select element
  const currentFilterValue = searchParams.get("category") || "all";

  const optionsArr = [
    { name: "All products", value: "all" },
    { name: "Chairs", value: "chairs" },
    { name: "Tables", value: "tables" },
    { name: "Sofa", value: "sofas" },
    { name: "Wardrobe", value: "wardrobes" },
  ];

  const { handleClick: handleChange } = useFilterSort("category", optionsArr);
  return (
    <Select
      optionsArr={optionsArr}
      curValue={currentFilterValue}
      handleChange={handleChange}
    />
  );
}

export default ProductFilter;
