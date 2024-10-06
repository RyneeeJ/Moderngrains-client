import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      console.log(data);
      navigate("/products", { replace: true });
      toast.success(`Welcome, ${data.name}! 😊`);
    },

    onError: (e) => {
      toast.error(e.message);
    },
  });

  return { signup, isSigningUp };
}
