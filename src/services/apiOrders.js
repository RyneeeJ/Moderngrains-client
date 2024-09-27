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

export async function getOrders() {
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
    const { data: orderedItems, error: orderedItemsError } = await supabase
      .from("ordered_items")
      .select("*")
      .eq("orderId", orderId);

    if (orderedItemsError) {
      console.error("ERROR:", orderedItemsError.message);
      return null;
    }

    return orderedItems;
  });

  const result = await Promise.all(promisesArr);

  const resultFinal = result.flat();
  return resultFinal;
}
