import ConfirmProductList from "./ConfirmProductList";
import ConfirmCheckoutLabel from "./ConfirmCheckoutLabel";

import { formatCurrency } from "../../utils/helpers";

import ModalConfirmButton from "../../ui/ModalConfirmButton";
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

function ConfirmCheckoutModal({ confirmedItems, totalPrice }) {
  return (
    <>
      <h2 className="mb-2 font-semibold uppercase tracking-wide sm:text-lg">
        Confirm Checkout
      </h2>

      <div className="mb-5 space-y-4 sm:mb-7 sm:space-y-5">
        <div>
          <ConfirmCheckoutLabel>Items:</ConfirmCheckoutLabel>
          <ConfirmProductList checkoutItems={confirmedItems} />
        </div>
        <div>
          <ConfirmCheckoutLabel>Total Price:</ConfirmCheckoutLabel>
          <div className="text-lg font-semibold sm:text-xl">
            {formatCurrency(totalPrice)}
          </div>
        </div>
        <div>
          <ConfirmCheckoutLabel>Payment Method:</ConfirmCheckoutLabel>
          <div className="font-semibold sm:text-lg">Cash on Delivery (COD)</div>
        </div>
      </div>

      <ModalConfirmButton>Place Order</ModalConfirmButton>
    </>
  );
}

export default ConfirmCheckoutModal;
