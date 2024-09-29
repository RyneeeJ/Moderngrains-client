import { useQuery } from "@tanstack/react-query";
import { getProfileDetails } from "../../services/apiProfile";

export function useGetProfile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileDetails,
  });

  return { data, isLoading, error };
}
