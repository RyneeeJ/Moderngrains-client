import { useMutation, useQueryClient } from "@tanstack/react-query";
import { placeOrder as placeOrderApi } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";

export function useAddOrder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const queryClient = useQueryClient();
  const { mutate: placeOrder, isLoading: isPlacingOrder } = useMutation({
    mutationFn: placeOrderApi,

    onSuccess: (data) => {
      searchParams.set("orderId", data.at(0).id);
      setSearchParams(searchParams);
    },
  });

  return { placeOrder, isPlacingOrder };
}
