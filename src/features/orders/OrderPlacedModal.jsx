import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function OrderPlacedModal() {
  return (
    <>
      <div className="mb-4 text-sm sm:text-lg">Thank you for ordering!</div>

      <div className="mb-3 max-w-96 text-xl sm:text-2xl">
        Your <span className="font-semibold">order #3219263</span> has been
        successfully placed
      </div>

      <Link className="mb-6 flex items-center justify-center gap-2 text-sm text-stone-400 hover:underline sm:text-base">
        <span>View order status </span>
        <span>
          <HiArrowRight />
        </span>
      </Link>

      <Link
        className="inline-block rounded-full bg-amber-50 px-6 py-2 font-bold text-lime-950 focus:ring focus:ring-lime-600 sm:px-10 sm:py-3 sm:text-lg"
        autoFocus
      >
        Back to Home
      </Link>
    </>
  );
}

export default OrderPlacedModal;
