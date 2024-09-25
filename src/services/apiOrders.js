import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

import { add, format } from "date-fns";

export async function placeOrder(items) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Couldn't find logged in user");

  const shippingDate = format(add(new Date(), { days: 3 }), "MM/dd/yyyy");
  console.log(shippingDate);

  const { data, error } = await supabase
    .from("orders")
    .insert([{ userId: user.id, items, status: "pending", shippingDate }])
    .select();

  if (error) {
    console.error("ERROR:", error.message);
    return null;
  }

  return data;
}
