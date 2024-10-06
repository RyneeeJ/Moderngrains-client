import { useMutation, useQueryClient } from "@tanstack/react-query";
import { placeOrder as placeOrderApi } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";
import { useUser } from "../authentication/useUser";

export function useAddOrder() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  const { mutate: placeOrder, isLoading: isPlacingOrder } = useMutation({
    mutationFn: ({ items, sessionId }) =>
      placeOrderApi({ items, sessionId, userId: user.id }),

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
