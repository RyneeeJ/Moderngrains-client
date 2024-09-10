import { forwardRef } from "react";
import ConfirmProductList from "./ConfirmProductList";

const ConfirmCheckoutModal = forwardRef(
  function ConfirmCheckoutModal(props, ref) {
    return (
      <dialog ref={ref} className="rounded-l backdrop:backdrop-blur-md">
        <div className="h-full w-full bg-lime-950 p-40 text-amber-50">
          <h2>Confirm Checkout</h2>

          <ConfirmProductList />
          <div>
            <span>Total Price:</span>
            <div>P59,999.00</div>
          </div>
          <div>
            <span>Payment Method:</span>
            <div>Cash on Delivery (COD)</div>
          </div>

          <button autoFocus>Place Order</button>
        </div>
      </dialog>
    );
  },
);

export default ConfirmCheckoutModal;
