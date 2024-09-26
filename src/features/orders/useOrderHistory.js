import { useQuery } from "@tanstack/react-query";

import { getOrders } from "../../services/apiOrders";
export function useOrderHistory() {
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
