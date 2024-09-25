import { PAGE_SIZE } from "../utils/constants";
import { getCartItems } from "./apiCart";

import supabase from "./supabase";

export async function getAllProducts({ filter, sortBy, page }) {
  let query = supabase
    .from("products")
    .select("id, name, price, image, stripeId", { count: "exact" });

  // 1. FILTER
  if (filter) query = query.eq("category", filter.value);

  // 2. SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  // 3. PAGINATE
  if (page) {
    const from = page * PAGE_SIZE - PAGE_SIZE;
    const to = page * PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error.message);
    throw new Error("There was a problem fetching the products");
  }

  return { data, count };
}

export async function getBestSellers() {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, price, image, stripeId")
    .eq("isBestSeller", true);

  if (error) {
    console.error(error.message);
    throw new Error("There was a problem fetching the products");
  }

  return data;
}
