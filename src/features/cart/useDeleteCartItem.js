import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItemInCart } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useDeleteCartItem() {
  const queryClient = useQueryClient();
  const { isLoading: isDeletingItem, mutate: deleteItem } = useMutation({
    mutationFn: deleteItemInCart,

    onSuccess: (data) => {
      toast.success(`${data.name} was successfully deleted from cart`);
      queryClient.invalidateQueries({
        queryKey: ["cartItems"],
      });
    },
  });

  return { isDeletingItem, deleteItem };
}
