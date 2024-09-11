import ProductList from "./ProductList";

import { useProducts } from "./useProducts";

function AllProducts() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <div>LOADING...</div>;

  console.log(isLoading);
  return <ProductList productsArr={products} />;
}

export default AllProducts;
