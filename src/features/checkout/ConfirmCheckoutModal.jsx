import { forwardRef } from "react";
import ConfirmProductList from "./ConfirmProductList";
import ConfirmCheckoutLabel from "./ConfirmCheckoutLabel";

import { formatCurrency } from "../../utils/helpers";
import { PiX } from "react-icons/pi";
const fakeCheckout = [
  {
    productName: "Urban Sleek Sofa",
    quantity: 2,
    price: 20_999,
    id: 1,
  },
  {
    productName: "Modern Black Chair",
    quantity: 4,
    price: 16_999,
    id: 2,
  },
];

const ConfirmCheckoutModal = forwardRef(function ConfirmCheckoutModal(
  { onCloseModal },
  ref,
) {
  const totalPrice = fakeCheckout.reduce((acc, item) => acc + item.price, 0);
  return (
    <dialog ref={ref} className="bg-transparent backdrop:backdrop-blur-md">
      <div className="relative h-full w-full rounded-md bg-lime-950 px-10 py-5 text-center text-amber-50">
        <h2 className="mb-2 font-semibold uppercase tracking-wide">
          Confirm Checkout
        </h2>

        <div className="mb-5 space-y-4">
          <div>
            <ConfirmCheckoutLabel>Items:</ConfirmCheckoutLabel>
            <ConfirmProductList fakeCheckout={fakeCheckout} />
          </div>
          <div>
            <ConfirmCheckoutLabel>Total Price:</ConfirmCheckoutLabel>
            <div className="text-lg font-semibold">
              {formatCurrency(totalPrice)}
            </div>
          </div>
          <div>
            <ConfirmCheckoutLabel>Payment Method:</ConfirmCheckoutLabel>
            <div className="font-semibold">Cash on Delivery (COD)</div>
          </div>
        </div>

        <button
          className="rounded-full bg-amber-50 px-6 py-2 font-bold text-lime-950 focus:ring focus:ring-lime-600"
          autoFocus
        >
          Place Order
        </button>

        <button
          className="rounded-ful absolute right-2 top-2 overflow-hidden"
          onClick={onCloseModal}
        >
          <PiX className="size-5" />
        </button>
      </div>
    </dialog>
  );
});

export default ConfirmCheckoutModal;
