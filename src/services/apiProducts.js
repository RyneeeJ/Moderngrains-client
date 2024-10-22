import { PRODUCTS_PAGE_SIZE } from "../utils/constants";

import supabase from "./supabase";

export async function getAllProducts({ filter, sortBy, page }) {
  try {
    let query = supabase
      .from("products")
      .select("id, name, price, image, stripeId, isBestSeller, stocks", {
        count: "exact",
      });

    // 1. FILTER
    if (filter) query = query.eq("category", filter.value);

    // 2. SORT
    if (sortBy)
      query = query.order(sortBy.field, {
        ascending: sortBy.direction === "asc",
      });

    // 3. PAGINATE
    if (page) {
      const from = page * PRODUCTS_PAGE_SIZE - PRODUCTS_PAGE_SIZE;
      const to = page * PRODUCTS_PAGE_SIZE - 1;
      query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (!data || data.length === 0)
      throw new Error("No products found for this page");

    if (error) throw new Error("There was a problem fetching the products");

    return { data, count };
  } catch (err) {
    return { data: null, count: null, error: err.message };
  }
}

export async function getProductDetails({ queryKey }) {
  try {
    const [_key, productId] = queryKey;

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", productId)
      .single();

    if (!data) {
      throw new Error("There's no product that matches with this URL");
    }

    return { data };
  } catch (err) {
    return { data: null, error: err.message };
  }
}

export async function getStocks(cartItemsArray) {
  const promisesArr = cartItemsArray.map(async (itemObj) => {
    const { data: stocks, error } = await supabase
      .from("products")
      .select("stocks")
      .eq("id", itemObj.productId)
      .single();

    if (error) {
      console.log(error.message);
      return new Error("There was a problem fetching products' stocks");
    }

    return { ...itemObj, stocksLeft: stocks.stocks };
  });

  const result = await Promise.all(promisesArr);

  return result;
}

export async function getBestSellers() {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, price, image, stripeId, isBestSeller, stocks")
    .eq("isBestSeller", true);

  if (error) {
    console.error(error.message);
    throw new Error("There was a problem fetching the products");
  }

  return data;
}
