import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import CheckoutButton from "./CheckoutButton";
import ConfirmCheckoutModal from "./ConfirmCheckoutModal";
import Modal from "../../ui/Modal";
import OrderPlacedModal from "../orders/OrderPlacedModal";

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

  function handleCloseModal() {
    modalEl.current.close();
  }

  function handleOpenModal() {
    modalEl.current.showModal();
  }

  return (
    <>
      <CheckoutButton onClick={handleOpenModal} />
      {createPortal(
        <Modal onCloseModal={handleCloseModal} ref={modalEl}>
          {/* <ConfirmCheckoutModal /> */}
          <OrderPlacedModal />
        </Modal>,
        document.body,
      )}
    </>
  );
}

export default Checkout;
