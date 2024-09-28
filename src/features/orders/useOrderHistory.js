import { useQuery } from "@tanstack/react-query";

import { getOrders } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";

export function useOrderHistory() {
  const [searchParams] = useSearchParams();

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
  });

  return { data, isLoadingOrders, error, count };
}
