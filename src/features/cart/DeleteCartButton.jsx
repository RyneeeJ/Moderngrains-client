import { createPortal } from "react-dom";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useModal } from "../../hooks/useModal";
import ConfirmDeleteAll from "./ConfirmDeleteAll";

function DeleteCartButton() {
  const { modalEl, handleOpenModal, handleCloseModal } = useModal();
  return (
    <>
      <Button onClick={handleOpenModal} type="cart-delete">
        Remove all
      </Button>
      {createPortal(
        <Modal onCloseModal={handleCloseModal} ref={modalEl}>
          <ConfirmDeleteAll closeModal={handleCloseModal} />
        </Modal>,
        document.body,
      )}
    </>
  );
}

export default DeleteCartButton;
