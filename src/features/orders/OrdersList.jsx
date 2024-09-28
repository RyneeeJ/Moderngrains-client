import Pagination from "../../ui/Pagination";
import { ORDERS_PAGE_SIZE } from "../../utils/constants";
import OrdersListItem from "./OrdersListItem";

import { useOrderHistory } from "./useOrderHistory";

function OrdersList() {
  const { data: ordersArr, isLoadingOrders, count } = useOrderHistory();
  if (isLoadingOrders) return <div>Loading....</div>;

  return (
    <>
      <ul className="space-y-2 overflow-y-auto border-y border-stone-200">
        {ordersArr?.map((item) => (
          <OrdersListItem key={item.id} item={item} />
        ))}
      </ul>
      <Pagination count={count} pageSize={ORDERS_PAGE_SIZE} />
    </>
  );
}

export default OrdersList;
