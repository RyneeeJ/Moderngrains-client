import supabase from "./supabase";

export async function getCart({ queryKey }) {
  // check if there is an existing session and user
  const [_, userId] = queryKey;

  if (!userId) return null;
  // If there is a logged in user, get cartId
  const {
    data: { id: cartId },
    error,
  } = await supabase.from("cart").select("id").eq("userId", userId).single();

  if (error) throw new Error("There was a problem accessing your cart details");

  return cartId;
}

export async function getCartItems({ queryKey }) {
  const [_, cartId] = queryKey;
  if (!cartId) return null;
  // Fetch cart items data
  const { data: cartItems, error: cartItemsError } = await supabase
    .from("cart_items")
    .select("*")
    .eq("cartId", cartId);

  if (cartItemsError)
    throw new Error("Something went wrong while accessing your cart items");

  // Create an array of product IDs of the items in the cart
  const productIdArr = cartItems?.map((item) => item.productId);

  const promises = productIdArr.map(async (productId) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", productId)
      .single();

    if (error) {
      console.error("ERROR:", error.message);
      return null;
    }

    return data;
  });

  const referenceProductsArr = await Promise.all(promises);

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

  const cartItemsFinalSorted = cartItemsFinal.sort((a, b) => a.id - b.id);
  // return the sorted final array of cart items with complete details needed to display in the cart page
  return cartItemsFinalSorted;
}

async function isItemInCart({ productId, cartItemsFinal }) {
  const itemAlreadyInCart = cartItemsFinal
    .map((item) => item.productId)
    .includes(productId);

  return itemAlreadyInCart;
}

async function updateCartItemQuantity(cartItemsFinal, productId, quantity) {
  const currentItem = cartItemsFinal.find(
    (item) => item.productId === productId,
  );

  // Update the quantity of the current selected item based on its existing quantity in the cart database
  const { data, error: updateQuantityError } = await supabase
    .from("cart_items")
    .update({ quantity: currentItem.quantity + quantity })
    .eq("id", currentItem.id)
    .select()
    .single();

  if (updateQuantityError) {
    console.error(updateQuantityError.message, "jksjkajsk");
    throw new Error("There was a problem adding to your cart");
  }

  return data;
}

async function addNewItemToCart(productId, cartId, name, quantity, stripeId) {
  const { data, error } = await supabase
    .from("cart_items")
    .insert([{ productId, cartId, name, quantity, stripeId }])
    .select()
    .single();

  if (error) {
    console.error(error.message);
    throw new Error("There was a problem adding to your cart");
  }

  return data;
}

export async function updateCart({
  productId,
  quantity,
  name,
  stripeId,
  cartId,
  cartItemsFinal,
}) {
  if (!cartId) throw new Error("Please login first");

  const itemAlreadyInCart = await isItemInCart({
    productId,
    cartItemsFinal,
  });

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
    const data = await addNewItemToCart(
      productId,
      cartId,
      name,
      quantity,
      stripeId,
    );
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

export async function deleteCheckedOutItems({ priceIdArr, cartId }) {
  const promises = priceIdArr.map(async (priceId) => {
    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("cartId", cartId)
      .eq("stripeId", priceId);

    if (error) {
      console.error("ERROR:", error.message);
    }
  });

  await Promise.all(promises);
}

export async function deleteAllItemsInCart(cartId) {
  const { error } = await supabase
    .from("cart_items")
    .delete()
    .eq("cartId", cartId);

  if (error) {
    console.error("ERROR:", error.message);
  }
}

export async function confirmItemInCart({ curStatus, id }) {
  const { error } = await supabase
    .from("cart_items")
    .update({ isConfirmed: !curStatus })
    .eq("id", id);

  if (error) {
    console.error("ERROR:", error.message);
    throw new Error("There was a problem confirming your item in cart");
  }
}

export async function confirmAllItemsInCart(curStatus) {
  let query = supabase.from("cart_items").update({ isConfirmed: !curStatus });

  if (curStatus) query = query.eq("isConfirmed", true);

  if (!curStatus) query = query.eq("isConfirmed", false);

  const { error } = await query;

  if (error) throw new Error("There was an error confirming your items");
}

export async function updateQuantityFromCart({
  currentQuantity,
  id,
  operation,
}) {
  const quantity =
    operation === "increase" ? currentQuantity + 1 : currentQuantity - 1;

  const { error } = await supabase
    .from("cart_items")
    .update({ quantity })
    .eq("id", id);

  if (error) {
    console.error("ERROR:", error.message);
    throw new Error("There was a problem updating item quantity in your cart");
  }
}
