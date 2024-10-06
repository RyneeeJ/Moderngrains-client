import { useMutation } from "@tanstack/react-query";
import { deleteCheckedOutItems } from "../../services/apiCart";

export function useDeleteCheckedOut() {
  const { mutate: deleteCheckedOut, isLoading: isDeleting } = useMutation({
    mutationFn: deleteCheckedOutItems,
  });

  return { deleteCheckedOut, isDeleting };
}
