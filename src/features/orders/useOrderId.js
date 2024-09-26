import { useQuery } from "@tanstack/react-query";
import { getOrderId } from "../../services/apiOrders";

export function useOrderId(sessionId) {
  const {
    data,
    isLoading: isLoadingOrderId,
    error,
  } = useQuery({
    queryKey: ["orderId", sessionId],
    queryFn: getOrderId,
  });

  return { data, isLoadingOrderId, error };
}
