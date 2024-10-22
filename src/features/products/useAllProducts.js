import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS_PAGE_SIZE } from "../../utils/constants";

export function useAllProducts() {
  const queryClient = useQueryClient();
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
  const [field, direction] = initialSortBy.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = Number(searchParams.get("page")) || 1;

  // QUERY
  const { data, isLoading } = useQuery({
    queryKey: ["products", filter, sortBy, page],
    queryFn: () => getAllProducts({ filter, sortBy, page }),
    suspense: true,
    retry: false,
  });

  // PRE-FETCH to avoid loading screen
  const pageCount = Math.ceil(data?.data?.count / PRODUCTS_PAGE_SIZE);

  // prefetch previous page when page count is less than
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["products", filter, sortBy, page + 1],
      queryFn: () => getAllProducts({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["products", filter, sortBy, page - 1],
      queryFn: () => getAllProducts({ filter, sortBy, page: page - 1 }),
    });

  return {
    isLoading,
    products: data?.data,
    dataError: data?.error,
    count: data?.count,
  };
}
