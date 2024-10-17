import Pagination from "../../ui/Pagination";
import { PRODUCTS_PAGE_SIZE } from "../../utils/constants";
import ProductList from "./ProductList";
import { useAllProducts } from "./useAllProducts";
import NoProductsError from "../../ui/NoProductsError";

function AllProducts() {
  const { products, count, dataError } = useAllProducts();

  if (!products) return <NoProductsError dataError={dataError} />;
  return (
    <>
      <ProductList productsArr={products} />
      <Pagination count={count} pageSize={PRODUCTS_PAGE_SIZE} />
    </>
  );
}

export default AllProducts;
