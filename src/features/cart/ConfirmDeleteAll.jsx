import { useCartId } from "./useCartId";
import { useDeleteAllItemsInCart } from "./useDeleteAllItemsInCart";
import ModalConfirmButton from "../../ui/ModalConfirmButton";

function ConfirmDeleteAll({ closeModal }) {
  const { cartId } = useCartId();
  const { deleteAllItems, isDeletingAll } = useDeleteAllItemsInCart();

  function handleDeleteAll() {
    deleteAllItems(cartId);
    closeModal();
  }
  return (
    <div className="space-y-4 md:space-y-8">
      <p className="max-w-64 text-lg sm:max-w-80 sm:text-xl md:text-2xl">
        Are you sure you want to delete all items in your cart?
      </p>
      <ModalConfirmButton disabled={isDeletingAll} onClick={handleDeleteAll}>
        Yes
      </ModalConfirmButton>
    </div>
  );
}

export default ConfirmDeleteAll;
