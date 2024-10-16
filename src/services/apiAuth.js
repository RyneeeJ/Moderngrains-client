import supabase from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error)
    throw new Error("Email or password are incorrect. Please try again");

  // This data is an object that contains the session and user property
  return data;
}
export async function logout() {
  const { error } = await supabase.auth.signOut();
  return error;
}

export async function signup({ email, password, name }) {
  // Sign up the user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  // Add profile for the user

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .insert([{ id: data?.user?.id, email: data?.user?.email, name }])
    .select()
    .single();

  // Add the cart of the user
  const { data: cartData, error: cartError } = await supabase
    .from("cart")
    .insert([{ userId: data?.user?.id }])
    .select();

  if (profileError || cartError)
    throw new Error(profileError?.message || cartError?.message);

  return profileData;
}

export async function getCurrentUser() {
  // Check whether there is an active session
  const { data: session } = await supabase.auth.getSession();

  if (!session?.session) return null;

  // If there is a session, get the user from supabase (redownload) because it is more secure than reading the user from the data above
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
