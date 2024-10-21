import { useMutation, useQueryClient } from "@tanstack/react-query";
import { placeOrder as placeOrderApi } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";

export function useAddOrder() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  const { mutate: placeOrder, isLoading: isPlacingOrder } = useMutation({
    mutationFn: ({ items, sessionId }) =>
      placeOrderApi({ items, sessionId, userId: user.id }),

    onSuccess: (data) => {
      // This is where the orderId is reflected in the browser url to avoid persistent order placement by the api upon browser refresh
      searchParams.set("orderId", data?.data?.id);
      setSearchParams(searchParams);
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
      if (data) toast.success(data?.message);
    },

    onError: (err) => {
      console.log(`${err.message} 💥💥💥💥💥`);
      toast.error(err.message);
    },
  });

  return { placeOrder, isPlacingOrder };
}
