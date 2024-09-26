import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

import { add, format } from "date-fns";

export async function placeOrder({ items, sessionId }) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Couldn't find logged in user");

  const shippingDate = format(add(new Date(), { days: 3 }), "MM/dd/yyyy");

  const { data, error } = await supabase
    .from("orders")
    .insert([
      { userId: user.id, items, status: "pending", shippingDate, sessionId },
    ])
    .select();

  if (error) {
    console.error("ERROR:", error.message);
    return null;
  }

  return data;
}

export async function getOrders() {
  const user = await getCurrentUser();

  if (!user) throw new Error("Couldn't find logged in user");

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("userId", user.id);

  if (error) {
    console.error("ERROR:", error.message);
    return null;
  }

  return data;
}
