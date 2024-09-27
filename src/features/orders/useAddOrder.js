import { useMutation, useQueryClient } from "@tanstack/react-query";
import { placeOrder as placeOrderApi } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";

export function useAddOrder() {
  const queryClient = useQueryClient();

  const [searchParams, setSearchParams] = useSearchParams();

  const { mutate: placeOrder, isLoading: isPlacingOrder } = useMutation({
    mutationFn: placeOrderApi,

    onSuccess: ({ orderData }) => {
      // This is where the orderId is reflected in the browser url to avoid persistent order placement by the api upon browser refresh
      searchParams.set("orderId", orderData.id);
      setSearchParams(searchParams);
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });

  return { placeOrder, isPlacingOrder };
}
