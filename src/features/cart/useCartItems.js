import { useQuery } from "@tanstack/react-query";

import { getCartItems } from "../../services/apiCart";

export function useCartItems() {
  const {
    data: cartItems,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: getCartItems,
  });

  return { cartItems, isLoading, error, isError };
}
