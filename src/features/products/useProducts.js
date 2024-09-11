import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();

  // FILTER
  // 1. Get the filter value,
  const filterValue = searchParams.get("category");
  // 2. if there is none, assign filter.value to null
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "category", value: filterValue };

  // SORT
  // 1. Get initial sort value, if there is none, set to price-asc
  const initialSortBy = searchParams.get("sortBy") || "price-asc";
  //
  const [field, direction] = initialSortBy.split("-");
  const sortBy = { field, direction };

  // PAGINATION

  // QUERY
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", filter, sortBy],
    queryFn: () => getProducts({ filter, sortBy }),
  });

  // PRE-FETCH to avoid loading screen
  return { isLoading, products, error };
}
