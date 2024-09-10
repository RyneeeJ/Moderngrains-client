import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import CheckoutButton from "./CheckoutButton";
import ConfirmCheckoutModal from "./ConfirmCheckoutModal";

function Checkout() {
  const modalEl = useRef();

  function handleOutsideClick(e) {
    if (modalEl?.current && modalEl.current === e.target)
      modalEl.current.close();
  }

  useEffect(function () {
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  return (
    <>
      <CheckoutButton
        onClick={(e) => {
          e.stopPropagation();
          modalEl.current.showModal();
          console.log("clicked inside");
        }}
      />
      {createPortal(<ConfirmCheckoutModal ref={modalEl} />, document.body)}
    </>
  );
}

export default Checkout;
