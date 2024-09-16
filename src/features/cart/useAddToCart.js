import { useMutation } from "@tanstack/react-query";
import { updateCart } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useAddToCart() {
  const { isLoading: isAddingToCart, mutate: addItem } = useMutation({
    mutationFn: updateCart,

    onSuccess: (data) => {
      toast.success(`${data?.name} succesfully added to cart`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isAddingToCart, addItem };
}
