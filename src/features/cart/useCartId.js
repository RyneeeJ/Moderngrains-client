import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";
import { useUser } from "../authentication/useUser";

export function useCartId() {
  const { user } = useUser();
  const userId = user?.id;
  const {
    data: cartId,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cartId", userId],
    queryFn: getCart,
    suspense: true,
  });

  return { cartId, isLoading, error };
}
