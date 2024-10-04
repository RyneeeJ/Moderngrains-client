import Pagination from "../../ui/Pagination";
import { PRODUCTS_PAGE_SIZE } from "../../utils/constants";
import ProductList from "./ProductList";
import { useAllProducts } from "./useAllProducts";

function AllProducts() {
  const { products, count } = useAllProducts();

  return (
    <>
      <ProductList productsArr={products} />
      <Pagination count={count} pageSize={PRODUCTS_PAGE_SIZE} />
    </>
  );
}

export default AllProducts;
