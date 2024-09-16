import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAllItemsInCart } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useDeleteAllItemsInCart() {
  const queryClient = useQueryClient();
  const { isLoading: isDeletingAll, mutate: deleteAllItems } = useMutation({
    mutationFn: deleteAllItemsInCart,

    onSuccess: () => {
      toast.success("All items were successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cartItems"],
      });
    },
  });

  return { isDeletingAll, deleteAllItems };
}
