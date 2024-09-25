import { useMutation } from "@tanstack/react-query";
import { placeOrder as placeOrderApi } from "../../services/apiOrders";

export function useAddOrder() {
  const { mutate: placeOrder, isLoading: isPlacingOrder } = useMutation({
    mutationFn: placeOrderApi,
  });

  return { placeOrder, isPlacingOrder };
}
