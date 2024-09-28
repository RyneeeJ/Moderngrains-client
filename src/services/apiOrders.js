import { ORDERS_PAGE_SIZE } from "../utils/constants";
import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

export async function placeOrder({ items, sessionId }) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Couldn't find logged in user");

  const { data: orderData, error } = await supabase
    .from("orders")
    .insert([{ userId: user.id, sessionId }])
    .select()
    .single();

  if (error) {
    console.error("ERROR:", error.message);
    return null;
  }

  const orderedItemsArr = items.map((item) => ({
    ...item,
    orderId: orderData.id,
  }));

  const { data: orderedItemsData, error: orderedItemsError } = await supabase
    .from("ordered_items")
    .insert(orderedItemsArr)
    .select();

  if (orderedItemsError) {
    console.error("ERROR:", orderedItemsError.message);
    return null;
  }

  return { orderData };
}

export async function getOrders({ filter, page }) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Couldn't find logged in user");

  const { data, error } = await supabase
    .from("orders")
    .select("id")
    .eq("userId", user.id);

  if (error) {
    console.error("ERROR:", error.message);
    return null;
  }

  const ordersIdArr = data.map((obj) => obj.id);

  const promisesArr = ordersIdArr.map(async (orderId) => {
    // FILTER
    let query = supabase
      .from("ordered_items")
      .select("*", { count: "exact" })
      .eq("orderId", orderId);

    if (filter) query = query.eq("status", filter.value);

    /* 
    THIS TIME, SERVER SIDE PAGINATION LIKE IN ALLPRODUCTS PAGE WILL NOT WORK BECAUSE IM LOOPING THRU INDIVIDUAL ORDERS
    // PAGINATE
    if (page) {
      const from = page * ORDERS_PAGE_SIZE - ORDERS_PAGE_SIZE;
      const to = page * ORDERS_PAGE_SIZE - 1;
      query = query.range(0, 1);
    }
      */

    const { data: orderedItems, error: orderedItemsError, count } = await query;

    if (orderedItemsError) {
      console.error("ERROR:", orderedItemsError.message);
      return null;
    }

    return { orderedItems, count };
  });

  const result = await Promise.all(promisesArr);

  const ordersArr = result.map((res) => res.orderedItems);
  const count = result
    .map((res) => res.count)
    .reduce((acc, itemCount) => acc + itemCount, 0);

  // SORT THE ARRAY, PENDING ORDERS APPEAR FIRST BEFORE COMPLETED ONES
  let resultFinal = ordersArr.flat().sort((a, b) => {
    if (a.status === "pending" && b.status === "completed") {
      return -1;
    } else if (a.status === "completed" && b.status === "pending") {
      return 1;
    } else return 0;
  });

  // CLIENT-SIDE PAGINATION
  if (page) {
    const from = page * ORDERS_PAGE_SIZE - ORDERS_PAGE_SIZE;
    const to = page * ORDERS_PAGE_SIZE;
    resultFinal = resultFinal.slice(from, to);
  }

  return { data: resultFinal, count };
}
export async function updateOrderStatus(id) {
  const { data, error } = await supabase
    .from("ordered_items")
    .update({ status: "completed" })
    .eq("id", id)
    .select();

  if (error) {
    console.error("ERROR:", error.message);
    return null;
  }

  return data;
}
