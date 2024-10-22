import ProductListItem from "./ProductListItem";

function ProductList({ productsArr, type }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 md:gap-y-8">
      {productsArr.map((item) => (
        <ProductListItem type={type} item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default ProductList;
