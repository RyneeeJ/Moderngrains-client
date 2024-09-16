import { createPortal } from "react-dom";
import { useModal } from "../../hooks/useModal";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import OrderPlacedModal from "../orders/OrderPlacedModal";
import ConfirmCheckoutModal from "./ConfirmCheckoutModal";

function CheckoutButton() {
  const { modalEl, handleCloseModal, handleOpenModal } = useModal();
  return (
    <>
      <Button onClick={handleOpenModal} type="checkout">
        Checkout 4 items
      </Button>
      {createPortal(
        <Modal onCloseModal={handleCloseModal} ref={modalEl}>
          <ConfirmCheckoutModal />
          {/* <OrderPlacedModal /> */}
        </Modal>,
        document.body,
      )}
    </>
  );
}

export default CheckoutButton;
