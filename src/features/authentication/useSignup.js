import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success(`Welcome, ${data.name}! 😊`);
      navigate("/");
    },

    onError: (e) => {
      toast.error(e.message);
    },
  });

  return { signup, isSigningUp };
}
