import OrdersListItem from "./OrdersListItem";

import sofa1 from "../../data/sofa1.jpg";
import chair1 from "../../data/chair1.jpg";
import { useOrderHistory } from "./useOrderHistory";

function OrdersList() {
  const fakeOrders = [
    {
      productName: "Urban Sleek Sofa",
      price: 20_999,
      quantity: 2,
      status: "completed",
      dateOrdered: "December 21, 2023",
      orderId: 1,
      image: sofa1,
    },
    {
      productName: "Black Leather Chair",
      price: 8_999,
      quantity: 2,
      status: "pending",
      dateOrdered: "June 1, 2023",
      orderId: 2,
      image: chair1,
    },
    {
      productName: "Urban Sleek Sofa",
      price: 20_999,
      quantity: 2,
      status: "completed",
      dateOrdered: "December 21, 2023",
      orderId: 3,
      image: sofa1,
    },
    {
      productName: "Black Leather Chair",
      price: 8_999,
      quantity: 2,
      status: "pending",
      dateOrdered: "June 1, 2023",
      orderId: 4,
      image: chair1,
    },
  ];

  const { data, isLoadingOrders } = useOrderHistory();
  console.log(data);
  return (
    <ul className="space-y-2">
      {fakeOrders.map((order) => (
        <OrdersListItem key={order.orderId} order={order} />
      ))}
    </ul>
  );
}

export default OrdersList;
