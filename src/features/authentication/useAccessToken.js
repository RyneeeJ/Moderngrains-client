import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../../services/apiAuth";

export function useAccessToken() {
  const {
    data: token,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["token"],
    queryFn: getAccessToken,
    suspense: true,
  });

  return {
    token,
    isLoading,
    error,
  };
}
