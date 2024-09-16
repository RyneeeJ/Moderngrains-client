import { useEffect, useRef } from "react";

export function useModal() {
  const modalEl = useRef();

  useEffect(function () {
    function handleOutsideClick(e) {
      if (modalEl?.current && modalEl.current === e.target)
        modalEl.current.close();
    }

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  function handleCloseModal() {
    modalEl.current.close();
  }

  function handleOpenModal() {
    modalEl.current.showModal();
  }

  return { modalEl, handleCloseModal, handleOpenModal };
}
