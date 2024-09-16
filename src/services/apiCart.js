import { getCurrentUser } from "./apiAuth";
import supabase from "./supabase";

async function getCart() {
  // Get user if there is an existing session
  const user = await getCurrentUser();

  if (!user) throw new Error("Please log in first");

  // If there is a logged in user, get cartId
  const {
    data: { id: cartId },
    error,
  } = await supabase.from("cart").select("id").eq("userId", user.id).single();

  if (error) throw new Error("There was a problem accessing your cart details");

  return cartId;
}

export async function getCartItems() {
  // Get cart id
  const cartId = await getCart();

  // Fetch cart items data - these cart items only include the quantity, name, and product Id
  const { data: cartItems, error: cartItemsError } = await supabase
    .from("cart_items")
    .select("*")
    .eq("cartId", cartId);

  if (cartItemsError)
    throw new Error("There was a problem fetching your cart items data");

  // Create an array of product IDs of the items in the cart
  const productIdArr = cartItems?.map((item) => item.productId);

  // Storage for the final list of items with complete details of the product such as image url and price
  const referenceProductsArr = [];

  // Loop the productIdArray:
  for (const productId of productIdArr) {
    // for each of the productID, fetch the entire row of product data
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", productId)
      .single();

    if (error) {
      console.error("ERROR:", error.message);
      return null;
    }
    // If successful, push the product object (with complete details) into the reference product array
    referenceProductsArr.push(data);
  }

  // For the final cart items array, map the initial cartItems array
  const cartItemsFinal = cartItems.map((item) => {
    // Compute for the reference product that matches the current item
    const referenceProduct = referenceProductsArr.find(
      (product) => product.id === item.productId,
    );

    // Add the necessary details such as price and image url from the reference product computed above
    return {
      ...item,
      price: referenceProduct.price,
      image: referenceProduct.image,
    };
  });

  // return the final array of cart items with complete details needed to display in the cart page
  return cartItemsFinal;
}

async function isItemInCart(productId) {
  // Get list of all items in the user's cart
  const cartItemsFinal = await getCartItems();

  const itemAlreadyInCart = cartItemsFinal
    .map((item) => item.productId)
    .includes(productId);

  return { itemAlreadyInCart, cartItemsFinal };
}

async function updateCartItemQuantity(cartItemsFinal, productId, quantity) {
  const currentItem = cartItemsFinal.find(
    (item) => item.productId === productId,
  );
  // Update the quantity of the current selected item based on its existing quantity in the cart database
  const { data, error: updateQuantityError } = await supabase
    .from("cart_items")
    .update({ quantity: currentItem.quantity + quantity })
    .eq("productId", productId)
    .select()
    .single();

  if (updateQuantityError) {
    console.error(updateQuantityError.message);
    throw new Error("There was a problem adding to your cart");
  }

  return data;
}

async function addNewItemToCart(productId, cartId, name, quantity) {
  const { data, error } = await supabase
    .from("cart_items")
    .insert([{ productId, cartId, name, quantity }])
    .select()
    .single();

  if (error) {
    console.error(error.message);
    throw new Error("There was a problem adding to your cart");
  }

  return data;
}

export async function updateCart({ productId, quantity, name }) {
  const cartId = await getCart();

  const { itemAlreadyInCart, cartItemsFinal } = await isItemInCart(productId);

  // If item is already in cart, just update the quantity
  if (itemAlreadyInCart) {
    const data = await updateCartItemQuantity(
      cartItemsFinal,
      productId,
      quantity,
    );
    return data;
  }
  // If item is not yet in the cart, add new item to cart
  else {
    const data = await addNewItemToCart(productId, cartId, name, quantity);
    return data;
  }
}

export async function deleteItemInCart(cartItemId) {
  const { data, error } = await supabase
    .from("cart_items")
    .delete()
    .eq("id", cartItemId)
    .select()
    .single();

  if (error) {
    console.error("ERROR:", error.message);
  }

  return data;
}

export async function deleteAllItemsInCart() {
  const cartId = await getCart();

  const { error } = await supabase
    .from("cart_items")
    .delete()
    .eq("cartId", cartId);

  if (error) {
    console.error("ERROR:", error.message);
  }
}
