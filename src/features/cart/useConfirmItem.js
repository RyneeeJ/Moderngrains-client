import { useMutation, useQueryClient } from "@tanstack/react-query";
import { confirmItemInCart } from "../../services/apiCart";

export function useConfirmItem() {
  const queryClient = useQueryClient();
  const { isLoading: isConfirming, mutate: setIsConfirmed } = useMutation({
    mutationFn: ({ curStatus, id }) => confirmItemInCart({ curStatus, id }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cartItems"],
      });
    },
  });

  return { isConfirming, setIsConfirmed };
}
