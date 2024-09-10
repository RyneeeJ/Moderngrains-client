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

function ConfirmCheckoutModal() {
  const totalPrice = fakeCheckout.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      <h2 className="mb-2 font-semibold uppercase tracking-wide sm:text-lg">
        Confirm Checkout
      </h2>

      <div className="mb-5 space-y-4 sm:mb-7 sm:space-y-5">
        <div>
          <ConfirmCheckoutLabel>Items:</ConfirmCheckoutLabel>
          <ConfirmProductList fakeCheckout={fakeCheckout} />
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

      <button
        className="rounded-full bg-amber-50 px-6 py-2 font-bold text-lime-950 focus:ring focus:ring-lime-600 sm:px-10 sm:py-3 sm:text-lg"
        autoFocus
      >
        Place Order
      </button>
    </>
  );
}

export default ConfirmCheckoutModal;
