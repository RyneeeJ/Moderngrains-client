import { useQuery } from "@tanstack/react-query";
import { getProfileDetails } from "../../services/apiProfile";
import { useUser } from "../authentication/useUser";

export function useGetProfile() {
  const { user } = useUser();
  const userId = user.id;
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile", userId],
    queryFn: getProfileDetails,
    suspense: true,
  });

  return { data, isLoading, error };
}
