import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrderStatus } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useOrderHistory } from "./useOrderHistory";

export function useReceiveOrder() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  // get current page number
  const curPage = searchParams.get("page") || 1;

  // get orders array for this current page
  const { data: ordersArr } = useOrderHistory();

  // get filter value for query invalidation
  const filterValue = searchParams.get("orders");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // get page value for query invalidation
  const page = Number(searchParams.get("page")) || 1;

  const { mutate: updateOrder, isLoading: isUpdatingOrder } = useMutation({
    mutationFn: updateOrderStatus,

    onSuccess: (data) => {
      // check if current page is more than 1, and at the same time, the item deleted was the last item in that page
      if (Number(curPage) > 1 && ordersArr.length === 1) {
        // if yes, decrease the page number by 1
        searchParams.set("page", Number(curPage) - 1);
        setSearchParams(searchParams);
      }
      // notify thru toast
      toast.success(`${data.at(0).name} already received!`);

      // invalidate orders queries
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });

  return { updateOrder, isUpdatingOrder };
}
