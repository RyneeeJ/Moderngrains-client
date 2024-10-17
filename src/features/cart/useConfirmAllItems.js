import { useMutation, useQueryClient } from "@tanstack/react-query";
import { confirmAllItemsInCart } from "../../services/apiCart";

export function useConfirmAllItems() {
  const queryClient = useQueryClient();
  const { isLoading: isConfirming, mutate: confirmAll } = useMutation({
    mutationFn: confirmAllItemsInCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["cartItems"]);
    },
  });

  return { isConfirming, confirmAll };
}
