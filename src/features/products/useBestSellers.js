import { useQuery } from "@tanstack/react-query";
import { getBestSellers } from "../../services/apiProducts";

export function useBestSellers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["best-sellers"],
    queryFn: getBestSellers,
    suspense: true,
  });

  return { data, isLoading, error };
}
