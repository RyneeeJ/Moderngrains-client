import { createPortal } from "react-dom";
import { useModal } from "../../hooks/useModal";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import OrderPlacedModal from "../orders/OrderPlacedModal";
import ConfirmCheckoutModal from "./ConfirmCheckoutModal";

function CheckoutButton({ confirmedItems, totalPrice }) {
  const { modalEl, handleCloseModal, handleOpenModal } = useModal();
  const numItems = confirmedItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Button onClick={handleOpenModal} type="checkout">
        Checkout {numItems} item
        {numItems > 1 ? "s" : ""}
      </Button>
      {createPortal(
        <Modal onCloseModal={handleCloseModal} ref={modalEl}>
          <ConfirmCheckoutModal
            confirmedItems={confirmedItems}
            totalPrice={totalPrice}
          />
          {/* <OrderPlacedModal /> */}
        </Modal>,
        document.body,
      )}
    </>
  );
}

export default CheckoutButton;
