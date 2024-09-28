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
  const page = searchParams.get("page") || 1;

  // QUERY
  const {
    data,
    isLoading: isLoadingOrders,
    error,
  } = useQuery({
    queryKey: ["orders", filter],
    queryFn: () => getOrders({ filter }),
  });

  return { data, isLoadingOrders, error };
}
