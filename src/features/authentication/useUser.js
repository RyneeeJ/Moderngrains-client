import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useEffect } from "react";
import supabase from "../../services/supabase";

export function useUser() {
  const queryClient = useQueryClient();
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    suspense: true,
  });

  useEffect(() => {
    // Listen for auth state change, if the user has just been signed in, invalidate the user query for it to be refetched because initially, the user would still be null right after signing up
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        queryClient.invalidateQueries(["user"]);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [queryClient]);
  return {
    user,
    isLoading,
    error,
    isAuthenticated: user?.role === "authenticated",
  };
}
