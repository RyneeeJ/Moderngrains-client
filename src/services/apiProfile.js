import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

export async function getProfileDetails() {
  // get user id of logged in user
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("No logged in user");
  }

  // fetch data that matches with user id from profiles table
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    console.log(error.message);
    throw new Error("There was an error fetching your profile details");
  }
  // return data

  return data;
}
