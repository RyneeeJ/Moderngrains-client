import { useState } from "react";
import { useUpdateProfile } from "./useUpdateProfile";
import { toast } from "react-hot-toast";
import { fetchAddress } from "../../utils/helpers";
import LoaderMini from "../../ui/LoaderMini";
import { useAccessToken } from "../authentication/useAccessToken";

function UserDetailInput({ defaultValue, userId, field, placeholder }) {
  const [inputAddressValue, setInputAddressValue] = useState(defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const { updateProfile, isUpdating } = useUpdateProfile();

  const { token } = useAccessToken();
  function handleSaveInput() {
    setIsEditing((isEditing) => !isEditing);
    // construct the updated object:
    const updatedObj = {
      [field]: inputAddressValue,
    };
    // If isEditing, and there is a valid inputValue, and the new inputValue is different from the last saved one, then update Profile
    if (isEditing && inputAddressValue && defaultValue !== inputAddressValue) {
      updateProfile({ userId, updatedObj });
    } else if (isEditing && !inputAddressValue) {
      toast.error("Invalid input: No address saved");
      return;
    }
  }

  async function handleGeolocation() {
    setIsFetchingLocation(true);
    try {
      const { locality, city, country } = await fetchAddress(token);
      setInputAddressValue(`${locality}, ${city}, ${country}`);
      toast.success("Current location fetched");
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsFetchingLocation(false);
    }
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
          value={
            isFetchingLocation ? "Fetching location..." : inputAddressValue
          }
          onChange={(e) => setInputAddressValue(e.target.value)}
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
