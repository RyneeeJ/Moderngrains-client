import supabase from "./supabase";

export async function getProducts({ filter, sortBy }) {
  let query = supabase.from("products").select("id, name, price, image");
  // 1. FILTER

  if (filter) query = query.eq("category", filter.value);

  // 2. SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  // 3. PAGINATE

  const { data, error } = await query;

  if (error) {
    console.error(error.message);
    throw new Error("There was a problem fetching the products");
  }

  console.log(data);
  return data;
}
