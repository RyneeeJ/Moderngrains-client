import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getOrders } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";
import { ORDERS_PAGE_SIZE } from "../../utils/constants";

export function useOrderHistory() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // 1. get filter value
  const filterValue = searchParams.get("orders");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // PAGINATION
  const page = Number(searchParams.get("page")) || 1;

  // QUERY
  const {
    data: { data, count } = {},
    isLoading: isLoadingOrders,
    error,
  } = useQuery({
    queryKey: ["orders", filter, page],
    queryFn: () => getOrders({ filter, page }),
    suspense: true,
  });

  // PRE-FETCH QUERIES
  const pageCount = Math.ceil(count / ORDERS_PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["orders", filter, page + 1],
      queryFn: () => getOrders({ filter, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["orders", filter, page - 1],
      queryFn: () => getOrders({ filter, page: page - 1 }),
    });

  return { data, isLoadingOrders, error, count };
}
