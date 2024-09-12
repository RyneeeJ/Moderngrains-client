import Pagination from "../../ui/Pagination";
import ProductList from "./ProductList";

import { useProducts } from "./useProducts";

function AllProducts() {
  const { products, isLoading, error, count } = useProducts();

  if (isLoading) return <div>LOADING...</div>;

  return (
    <>
      <ProductList productsArr={products} />
      <Pagination count={count} />
    </>
  );
}

export default AllProducts;
