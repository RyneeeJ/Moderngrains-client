import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart } from "../../services/apiCart";
import toast from "react-hot-toast";
// import { useCartItems } from "./useCartItems";

export function useAddToCart() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: addItem } = useMutation({
    mutationFn: updateCart,

    onSuccess: (data) => {
      toast.success(`${data?.name} succesfully added to cart`);
      queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, addItem };
}
