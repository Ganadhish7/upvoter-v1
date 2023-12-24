import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navitate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      navitate("/dashboard");
    },
  });

  return { signup, isLoading };
}
