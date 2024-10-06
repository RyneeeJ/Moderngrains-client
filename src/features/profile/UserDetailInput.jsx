import { useState } from "react";
import { useUpdateProfile } from "./useUpdateProfile";
import { toast } from "react-hot-toast";
import { fetchAddress } from "../../utils/helpers";
import Loader from "../../ui/Loader";
import LoaderMini from "../../ui/LoaderMini";

function UserDetailInput({ defaultValue, userId, field, placeholder }) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);

  const { updateProfile, isUpdating } = useUpdateProfile();

  function handleSaveInput() {
    setIsEditing((isEditing) => !isEditing);
    // construct the updated object:
    const updatedObj = {
      [field]: inputValue,
    };

    // If isEditing, and there is a valid inputValue, and the new inputValue is different from the last saved one, then update Profile
    if (isEditing && inputValue && defaultValue !== inputValue) {
      updateProfile({ userId, updatedObj });
    } else if (isEditing && !inputValue) {
      toast.error("Invalid input: No address saved");
      return;
    }
  }

  async function handleGeolocation() {
    setIsFetchingLocation(true);
    const { locality, city, country } = await fetchAddress();
    setInputValue(`${locality}, ${city}, ${country}`);
    setIsFetchingLocation(false);
  }

  return (
    <div className="mb-6 flex flex-col gap-1 sm:mb-8 md:mb-10">
      <div className="flex justify-between">
        <label
          htmlFor={field}
          className="text-xs xs:text-sm sm:text-base md:text-lg"
        >
          {field.replace(field.at(0), field.at(0).toUpperCase())}
        </label>

        {field === "address" && isEditing && (
          <button
            onClick={handleGeolocation}
            disabled={isFetchingLocation}
            className="mr-9 rounded-md px-2 text-xs text-lime-700 hover:underline xs:text-sm sm:text-base md:text-lg"
          >
            Use Geolocation
          </button>
        )}
      </div>

      <div className="flex items-center sm:space-x-2">
        <input
          id={field}
          type="text"
          placeholder={placeholder}
          value={isFetchingLocation ? "Fetching location..." : inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={!isEditing || isFetchingLocation}
          className="grow rounded-md bg-neutral-50 px-3 py-1 text-sm text-lime-800 ring-1 placeholder:text-neutral-400 disabled:bg-neutral-200 disabled:ring-0 xs:text-base sm:px-4 sm:py-2 sm:text-lg md:text-xl"
        />

        <button
          onClick={handleSaveInput}
          disabled={isFetchingLocation || isUpdating}
          className="flex w-10 cursor-pointer justify-center text-xs text-stone-500 hover:underline xs:text-sm sm:text-base md:text-lg"
        >
          {isEditing && isFetchingLocation && <LoaderMini />}
          {isEditing && !isFetchingLocation && "Save"}
          {!isEditing && "Edit"}
        </button>
      </div>
    </div>
  );
}

export default UserDetailInput;
