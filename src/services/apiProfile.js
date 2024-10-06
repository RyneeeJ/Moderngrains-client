import { getCurrentUser } from "./apiAuth";
import supabase, { supabaseUrl } from "./supabase";

export async function getProfileDetails({ queryKey }) {
  // get user id of logged in user
  const [_, userId] = queryKey;
  if (!userId) {
    throw new Error("No logged in user");
  }

  // fetch data that matches with user id from profiles table
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.log(error.message);
    throw new Error("There was an error fetching your profile details");
  }
  // return data

  return data;
}

export async function updateProfileDetails({ userId, updatedObj }) {
  if (updatedObj.avatar) {
    // if updated object the avatar property
    // construct unique image name
    const imageName = `${Math.random()}-${updatedObj.avatar.name}`.replaceAll(
      "/",
      "",
    );

    // construct image path to be uploaded to supabase bucket
    const imagePath = `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`;

    // upload image to supabase bucket
    const { error } = await supabase.storage
      .from("avatars")
      .upload(imageName, updatedObj.avatar);

    if (error) {
      console.error("There was a problem uploading your avatar photo");
    }

    // change avatar property to image path created earlier (this is the new updatedObj that will be used to update profiles data table)
    updatedObj.avatar = imagePath;
  }

  // update profiles data table using updatedObj
  const { data, error } = await supabase
    .from("profiles")
    .update(updatedObj)
    .eq("id", userId)
    .select();

  if (error) {
    console.log(error.message);
    throw new Error("There was an error fetching your profile details");
  }

  return data;
}
