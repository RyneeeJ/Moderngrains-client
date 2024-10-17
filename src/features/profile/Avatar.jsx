import { useRef, useState } from "react";
import { PiPencilSimple } from "react-icons/pi";
import { useUpdateProfile } from "./useUpdateProfile";
import LoaderMini from "../../ui/LoaderMini";
import ButtonConfirmAvatar from "../../ui/ButtonConfirmAvatar";

function Avatar({ avatar, userId }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputEl = useRef(null);

  const { updateProfile } = useUpdateProfile();

  function handleEditAvatar() {
    fileInputEl.current.click();
  }

  function handleCancelSelection() {
    setSelectedImage(null);
    setImagePreview(null);
    // This resets the value ot the file input element to re-trigger onChange event even if i select/preview the same image file twice in a row
    fileInputEl.current.value = null;
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleUploadImage() {
    setIsUpdating(true);
    updateProfile(
      { userId, updatedObj: { avatar: selectedImage } },
      {
        onSettled: () => {
          setIsUpdating(false);
          setSelectedImage(null);
        },
      },
    );
  }

  return (
    <>
      <div className="mb-4 flex h-8 items-center gap-2">
        {selectedImage && (
          <>
            <ButtonConfirmAvatar
              onClick={handleUploadImage}
              disabled={isUpdating}
              type="save"
            >
              {isUpdating ? <LoaderMini /> : "Save"}
            </ButtonConfirmAvatar>
            <ButtonConfirmAvatar
              onClick={handleCancelSelection}
              disabled={isUpdating}
              type="cancel"
            >
              Cancel
            </ButtonConfirmAvatar>
          </>
        )}
      </div>
      <div className="relative mb-2 w-28 md:w-36">
        <div className="aspect-square overflow-hidden rounded-full">
          <img
            src={imagePreview || avatar}
            alt="Profile image"
            className="h-full w-full object-cover"
          />
        </div>
        {!selectedImage && !isUpdating && (
          <button
            className={`absolute right-1 top-0 cursor-pointer rounded-full border-[3px] border-amber-50 bg-zinc-800 p-0.5 transition-all duration-200 hover:bg-zinc-500 md:right-2 md:p-1`}
            onClick={handleEditAvatar}
          >
            {isUpdating ? (
              "UPDATING"
            ) : (
              <PiPencilSimple className="size-5 text-amber-50" />
            )}
          </button>
        )}

        <input
          ref={fileInputEl}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </>
  );
}

export default Avatar;
