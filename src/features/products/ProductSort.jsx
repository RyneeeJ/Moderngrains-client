import Select from "../../ui/Select";

function ProductSort() {
  const optionsArr = [
    { name: "Low to high price", value: "price-asc" },
    { name: "High to low price", value: "price-desc" },
  ];
  return <Select optionsArr={optionsArr} />;
}

export default ProductSort;
