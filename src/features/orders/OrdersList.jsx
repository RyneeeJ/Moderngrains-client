import OrdersListItem from "./OrdersListItem";

import sofa1 from "../../data/sofa1.jpg";
import chair1 from "../../data/chair1.jpg";
import { useOrderHistory } from "./useOrderHistory";
import { format } from "date-fns";

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

  const ordersArr = data?.reduce((acc, order) => {
    // console.log(new Date(order.created_at) < new Date(order.shippingDate));

    order.items.forEach((item) => {
      const itemObj = {
        productName: item.name,
        price: item.price,
        quantity: item.quantity,
        dateOrdered: order.created_at,
        status: order.status,
        deliveryDate: order.deliveryDate,
        image: item.image,
        itemId: item.itemId,
      };

      acc.push(itemObj);
    });

    return acc;
  }, []);

  if (isLoadingOrders) return <div>Loading....</div>;
  return (
    <ul className="space-y-2">
      {ordersArr?.map((item) => (
        <OrdersListItem key={item.itemId} item={item} />
      ))}
    </ul>
  );
}

export default OrdersList;
