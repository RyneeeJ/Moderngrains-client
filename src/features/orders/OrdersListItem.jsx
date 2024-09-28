import { formatCurrency } from "../../utils/helpers";
import { format } from "date-fns";
import { useReceiveOrder } from "./useReceiveOrder";

function OrdersListItem({ item }) {
  const { image, name, price, quantity, dateOrdered, status, id } = item;

  const { updateOrder, isUpdatingOrder } = useReceiveOrder();

  function handleReceiveOrder() {
    updateOrder(id);
  }
  return (
    <li className="flex rounded-md bg-neutral-200">
      <div className="basis-1/4 xs:max-w-32 xs:basis-1/3 sm:max-w-40 md:max-w-48">
        <img
          className="aspect-square h-full rounded-md object-cover object-bottom"
          src={image}
        />
      </div>
      <div className="flex grow flex-col px-4 py-3 xs:py-4 sm:px-6 sm:py-6">
        <div className="mb-1 flex items-center justify-between xs:mb-2">
          <div className="text-xs font-medium xs:text-sm sm:text-lg md:text-xl">
            {name}
          </div>
          <div className="text-sm font-semibold text-lime-950 xs:text-base sm:text-xl md:text-2xl">
            {formatCurrency(price * quantity)}
          </div>
        </div>
        <div className="mb-2 text-[10px] opacity-85 xs:mb-4 xs:text-xs sm:text-base md:text-lg">
          Quantity: <span className="font-semibold">{quantity}</span>
        </div>
        <div className="mt-auto flex items-center justify-between text-[10px] xs:text-xs sm:text-base md:text-lg">
          <div className="md: flex flex-col md:flex-row md:gap-2">
            <span className="opacity-85">Date ordered:</span>{" "}
            <span className="font-medium">
              {format(new Date(dateOrdered), "MM/dd/yyyy")}
            </span>
          </div>
          {status === "pending" && (
            <button
              onClick={handleReceiveOrder}
              className="cursor-pointer rounded-full bg-red-700 px-3 py-1 uppercase text-amber-50 transition-all duration-200 hover:bg-red-600"
            >
              {isUpdatingOrder ? "Updating..." : "Mark as Received"}
            </button>
          )}
          {status === "completed" && (
            <div className="rounded-full bg-lime-700 px-3 py-1 uppercase text-amber-50">
              {status}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default OrdersListItem;
