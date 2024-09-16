import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuantityFromCart } from "../../services/apiCart";

export function useUpdateQuantityFromCart() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateQuantity } = useMutation({
    mutationFn: updateQuantityFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cartItems"],
      });
    },
  });

  return { isUpdating, updateQuantity };
}
