import { Link } from "react-router-dom";

function PaymentMethodButton() {
  return (
    <Link
      to="/account/profile/payment-method"
      className="grow rounded-md bg-neutral-200 px-3 py-1 text-left text-sm text-lime-800 xs:text-base sm:px-4 sm:py-2 sm:text-lg md:text-xl"
    >
      Cash on Delivery (COD)
    </Link>
  );
}

export default PaymentMethodButton;
