import ProductList from "./ProductList";

import sofa1 from "../../data/sofa1.jpg";
import wardrobe1 from "../../data/wardrobe1.jpg";
import chair1 from "../../data/chair1.jpg";
import table1 from "../../data/table1.jpg";

const fakeProducts = [
  {
    productName: "Urban Sleek Sofa",
    price: 20_999,
    image: sofa1,
    id: 1,
  },
  {
    productName: "Wooden Wardrobe",
    price: 35_999,
    image: wardrobe1,
    id: 2,
  },
  {
    productName: "Black Leather Chair",
    price: 8_999,
    image: chair1,
    id: 3,
  },
  {
    productName: "Modern Bedside Table",
    price: 10_999,
    image: table1,
    id: 4,
  },
  {
    productName: "Urban Sleek Sofa",
    price: 20_999,
    image: sofa1,
    id: 5,
  },
  {
    productName: "Wooden Wardrobe",
    price: 35_999,
    image: wardrobe1,
    id: 6,
  },
];
function AllProducts() {
  return <ProductList productsArr={fakeProducts} />;
}

export default AllProducts;
