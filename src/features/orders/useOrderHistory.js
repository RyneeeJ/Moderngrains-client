import { useQuery } from "@tanstack/react-query";

import { getOrders } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";

export function useOrderHistory() {
  const [searchParams] = useSearchParams();

  // 1. get filter value
  const filterValue = searchParams.get("orders");
  // 2. if there is none, assign filter.value to null
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "order", value: filterValue };
  const {
    data,
    isLoading: isLoadingOrders,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return { data, isLoadingOrders, error };
}
