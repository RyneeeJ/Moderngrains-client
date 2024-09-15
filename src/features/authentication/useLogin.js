import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fakeLogin } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: fakeLogin,
    onSuccess: (data) => {
      // Manually cache the user data right after successful login
      queryClient.setQueryData(["user"], data?.user);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR:", err.message);
    },
  });

  return { login, isLoading };
}
