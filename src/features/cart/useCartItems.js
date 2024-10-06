import { useQuery } from "@tanstack/react-query";

import { useCartId } from "./useCartId";
import { getCartItems } from "../../services/apiCart";

export function useCartItems() {
  const { cartId } = useCartId();
  const {
    data: cartItems,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["cartItems", cartId],
    queryFn: getCartItems,
    suspense: true,
  });

  return { cartItems, isLoading, error, isError, cartId };
}
