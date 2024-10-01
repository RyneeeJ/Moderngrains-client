import Pagination from "../../ui/Pagination";
import { PRODUCTS_PAGE_SIZE } from "../../utils/constants";
import { useLogin } from "../authentication/useLogin";
import ProductList from "./ProductList";
import { useAllProducts } from "./useAllProducts";

function AllProducts() {
  const { products, count } = useAllProducts();

  const { login, isLoading: isLoggingIn } = useLogin();

  return (
    <>
      <ProductList productsArr={products} />
      <Pagination count={count} pageSize={PRODUCTS_PAGE_SIZE} />

      {/* TEMPORARY EXPERIMENT */}
      <div className="mt-10 flex w-full justify-center">
        <button
          disabled={isLoggingIn}
          onClick={login}
          className="inline-block cursor-pointer rounded-full bg-slate-800 px-6 py-2 font-semibold text-amber-50"
        >
          LOG IN NOW
        </button>
      </div>
    </>
  );
}

export default AllProducts;
