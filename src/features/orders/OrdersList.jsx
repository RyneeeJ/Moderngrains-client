import OrdersListItem from "./OrdersListItem";

import { useOrderHistory } from "./useOrderHistory";

function OrdersList() {
  const { data: ordersArr, isLoadingOrders } = useOrderHistory();

  if (isLoadingOrders) return <div>Loading....</div>;

  return (
    <ul className="max-h-[600px] space-y-2 overflow-y-auto border-y border-stone-200 xs:max-h-[750px] md:max-h-[850px]">
      {ordersArr?.map((item) => (
        <OrdersListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default OrdersList;
