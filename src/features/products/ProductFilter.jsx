import Select from "../../ui/Select";

function ProductFilter() {
  const optionsArr = [
    { name: "All products", value: "all" },
    { name: "Chairs", value: "chairs" },
    { name: "Tables", value: "tables" },
    { name: "Sofa", value: "sofa" },
    { name: "Wardrobe", value: "wardrobe" },
  ];
  return <Select optionsArr={optionsArr} />;
}

export default ProductFilter;
