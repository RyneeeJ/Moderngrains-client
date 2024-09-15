import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

async function getCartItem(cartId) {
  const { data: cart, error } = await supabase
    .from("cart_items")
    .select("*")
    .eq("cartId", cartId);

  return cart;
}

async function getCart(userId) {
  const { data: cart, error: cartError } = await supabase
    .from("cart")
    .select("id")
    .eq("userId", userId)
    .single();

  return { cart, cartError };
}

async function getCartItems(cartId) {
  const { data: cartItems, error: cartItemsError } = await supabase
    .from("cart_items")
    .select("productId, quantity")
    .eq("cartId", cartId);

  return { cartItems, cartItemsError };
}

async function isItemInCart(productId) {
  // Get user if there is an existing session
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Please log in first before adding to cart");
  }

  // If there is an authenticated user, get cartId linked to the user
  const {
    cart: { id: cartId },
    cartError,
  } = await getCart(user.id);

  if (cartError)
    throw new Error("There was a problem fetching your cart data.");

  // Get list of all items in the user's cart
  const { cartItems } = await getCartItems(cartId);

  const itemAlreadyInCart = cartItems
    .map((item) => item.productId)
    .includes(productId);

  return { itemAlreadyInCart, cartItems, cartId };
}

async function updateCartItemQuantity(cartItems, productId, quantity) {
  const currentItem = cartItems.find((item) => item.productId === productId);
  const { error: updateQuantityError } = await supabase
    .from("cart_items")
    .update({ quantity: currentItem.quantity + quantity })
    .eq("productId", productId);

  if (updateQuantityError) {
    console.error(updateQuantityError.message);
    throw new Error("There was a problem adding to your cart");
  }
}

async function addNewItemToCart(productId, quantity, cartId, name) {
  const { data, error } = await supabase
    .from("cart_items")
    .insert([{ productId, cartId, quantity, name }])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("There was a problem adding to your cart");
  }

  return data;
}

export async function updateCart({ productId, quantity, name }) {
  const { itemAlreadyInCart, cartItems, cartId } =
    await isItemInCart(productId);

  // If item is already in cart, just update the quantity
  if (itemAlreadyInCart)
    await updateCartItemQuantity(cartItems, productId, quantity);
  // If item is not yet in the cart, add new item to cart
  else await addNewItemToCart(productId, quantity, cartId, name);

  const cart = await getCartItem(cartId);
  const item = cart.find((itemObj) => itemObj.productId === productId);

  return item;
}
