import { useMutation } from "@tanstack/react-query";
import { signup, signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (user) => {
      toast.success(
        "Account succesfully created! Please verify the new acoount from user's email address."
      );
    },
  });

  return { signup, isLoading };
}
