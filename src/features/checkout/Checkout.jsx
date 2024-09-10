import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import CheckoutButton from "./CheckoutButton";
import ConfirmCheckoutModal from "./ConfirmCheckoutModal";

function Checkout() {
  const modalEl = useRef();

  useEffect(function () {
    function handleOutsideClick(e) {
      if (modalEl?.current && modalEl.current === e.target)
        modalEl.current.close();
    }

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  function handleOpenModal() {
    modalEl.current.showModal();
  }

  return (
    <>
      <CheckoutButton onClick={handleOpenModal} />
      {createPortal(<ConfirmCheckoutModal ref={modalEl} />, document.body)}
    </>
  );
}

export default Checkout;
