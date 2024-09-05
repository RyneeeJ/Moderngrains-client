import ProductListItem from "./ProductListItem";
import sofa1 from "../../data/sofa1.jpg";
import wardrobe1 from "../../data/wardrobe1.jpg";
import chair1 from "../../data/chair1.jpg";
import table1 from "../../data/table1.jpg";

const fakeRecommendation = [
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

function ProductList() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 md:gap-y-8">
      {fakeRecommendation.map((item) => (
        <ProductListItem
          productName={item.productName}
          price={item.price}
          image={item.image}
          key={item.id}
        />
      ))}
    </ul>
  );
}

export default ProductList;
