import { useMutation } from "@tanstack/react-query";
import { updateProfileDetails } from "../../services/apiProfile";
import toast from "react-hot-toast";

export function useUpdateProfile() {
  const { mutate: updateProfile, isLoading: isUpdating } = useMutation({
    mutationFn: updateProfileDetails,

    onSuccess: () => {
      toast.success("Profile details sucessfully updated");
    },
  });

  return { updateProfile, isUpdating };
}
