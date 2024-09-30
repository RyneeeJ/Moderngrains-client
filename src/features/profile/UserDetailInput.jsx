import { useRef } from "react";
import { useUpdateProfile } from "./useUpdateProfile";
import { toast } from "react-hot-toast";

function UserDetailInput({
  defaultValue,
  disabled,
  setIsEditing,
  userId,
  field,
}) {
  const inputEl = useRef();

  const { updateProfile, isUpdating } = useUpdateProfile();

  function handleSaveInput() {
    const defaultValue = inputEl.current.defaultValue;
    const inputValue = inputEl.current.value;
    const updatedObj = {
      [field]: inputEl.current.value,
    };

    if (!disabled && inputValue && defaultValue !== inputValue) {
      updateProfile({ userId, updatedObj });
    } else if (!inputEl.current.value) {
      toast.error("Save failed: Invalid input details");
      return;
    }
    setIsEditing((setIsEditing) => !setIsEditing);
  }
  return (
    <>
      <input
        ref={inputEl}
        type="text"
        defaultValue={defaultValue}
        disabled={disabled}
        className="grow rounded-md bg-neutral-50 px-3 py-1 text-sm text-lime-800 ring-1 disabled:bg-neutral-200 disabled:ring-0 xs:text-base sm:px-4 sm:py-2 sm:text-lg md:text-xl"
      />

      <span
        onClick={handleSaveInput}
        className="flex w-10 cursor-pointer justify-center text-xs text-stone-500 hover:underline xs:text-sm sm:text-base md:text-lg"
      >
        {disabled ? "Edit" : "Save"}
      </span>
    </>
  );
}

export default UserDetailInput;
