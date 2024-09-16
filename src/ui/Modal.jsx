import { forwardRef } from "react";
import { PiX } from "react-icons/pi";

const Modal = forwardRef(function Modal({ children, onCloseModal }, ref) {
  return (
    <dialog ref={ref} className="bg-transparent backdrop:backdrop-blur-md">
      <div className="relative rounded-md bg-lime-950 px-10 py-5 text-center text-amber-50 sm:px-16 sm:py-8">
        {children}

        <button
          className="absolute right-2 top-2 overflow-hidden rounded-full"
          onClick={onCloseModal}
        >
          <PiX className="size-5 sm:size-6" />
        </button>
      </div>
    </dialog>
  );
});

export default Modal;
