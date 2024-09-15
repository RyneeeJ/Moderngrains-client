import { useMutation } from "@tanstack/react-query";
import { updateCart } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useAddToCart() {
  const { isLoading: isAddingToCart, mutate: addItem } = useMutation({
    mutationFn: updateCart,

    onSuccess: () => {
      toast.success(`Item succesfully added to cart`);
      // toast.success(`${data.name} succesfully added to cart`);
      // Invalidate queries if needed
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isAddingToCart, addItem };
}
