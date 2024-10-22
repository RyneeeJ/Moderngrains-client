import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

export function useProductDetails() {
  const { id } = useParams();
  const productId = Number(id);
  const { data, isLoading, error } = useQuery({
    queryKey: ["productDetails", productId],
    queryFn: getProductDetails,
    suspense: true,
  });

  return { data, isLoading, error };
}
