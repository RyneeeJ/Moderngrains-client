import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCheckedOutItems } from "../../services/apiCart";

export function useDeleteCheckedOut() {
  const queryClient = useQueryClient();
  const { mutate: deleteCheckedOut, isLoading: isDeleting } = useMutation({
    mutationFn: deleteCheckedOutItems,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cartItems"],
      });
    },
  });

  return { deleteCheckedOut, isDeleting };
}
