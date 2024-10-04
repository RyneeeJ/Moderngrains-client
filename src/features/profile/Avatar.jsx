import { useRef, useState } from "react";
import { PiCheckBold, PiPencilSimple } from "react-icons/pi";
import { useUpdateProfile } from "./useUpdateProfile";

function Avatar({ avatar, userId }) {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputEl = useRef(null);

  const { updateProfile, isUpdating } = useUpdateProfile();
  function handleClick() {
    setIsUploading((value) => !value);
    // if current state is not uploading (default), toggle click the hidden file input element
    if (!isUploading) fileInputEl.current.click();
    else {
      if (!selectedImage) return;
      // If current state is uploading, upload the avatar
      updateProfile({ userId, updatedObj: { avatar: selectedImage } });
      // reset selected image state
      setSelectedImage(null);
    }
  }

  function handleCancelSelection() {
    setIsUploading(false);
    setSelectedImage(null);
  }

  function handleImageChange(event) {
    // after choosing an image and applying it, set the state
    setSelectedImage(event.target.files[0]);
  }
  return (
    <>
      <div className="mb-4 flex h-8 items-center">
        {isUploading && (
          <button
            onClick={handleCancelSelection}
            disabled={isUpdating}
            className="inline-block rounded-full bg-red-600 px-3 py-1 text-sm text-amber-50 transition-all duration-200 hover:bg-red-700"
          >
            Cancel image selection
          </button>
        )}
      </div>
      <div className="relative mb-2 w-28 md:w-36">
        <img
          src={avatar}
          alt="Profile image"
          className="aspect-square h-full w-full rounded-full"
        />

        <button
          className={`absolute right-1 top-0 cursor-pointer rounded-full border-[3px] border-amber-50 ${isUploading ? "hover:bg-lime-00 bg-lime-800" : "bg-zinc-800 hover:bg-zinc-500"} p-0.5 transition-all duration-200 md:right-2 md:p-1`}
          onClick={handleClick}
        >
          {isUploading ? (
            <PiCheckBold className="size-5 text-amber-50" />
          ) : (
            <PiPencilSimple className="size-5 text-amber-50" />
          )}
        </button>

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
