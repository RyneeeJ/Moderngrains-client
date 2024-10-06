import { useEffect } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

import Section from "../ui/Section";
import { useDeleteCheckedOut } from "../features/cart/useDeleteCheckedOut";
import { useCartItems } from "../features/cart/useCartItems";
import { useAddOrder } from "../features/orders/useAddOrder";

function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  // needed to check if there is already an order placed
  const orderId = searchParams.get("orderId") || null;

  if (!sessionId) return <Navigate to="/" replace />;

  const { placeOrder, isPlacingOrder } = useAddOrder();
  const { deleteCheckedOut, isDeleting } = useDeleteCheckedOut();

  const { cartItems, cartId } = useCartItems();

  useEffect(
    function () {
      const checkedOutItems = cartItems.filter(
        (item) => item.isConfirmed === true,
      );
      const priceIdArr = checkedOutItems.map((item) => item.stripeId);

      async function success() {
        try {
          const res = await fetch(
            `http://localhost:4242/checkout-success?session_id=${sessionId}`,
          );

          const data = await res.json();

          const status = data.status;

          if (status === "paid") {
            const ordersArr = checkedOutItems.map((item) => ({
              name: item.name,
              price: item.price,
              image: item.image,
              quantity: item.quantity,
            }));

            placeOrder({ items: ordersArr, sessionId });
            deleteCheckedOut({ priceIdArr, cartId });
          }
        } catch (e) {
          console.log(e.message);
        }
      }
      // If loaded for the first time and there is no orderId set in url searchparams yet, place order.
      if (!orderId) success();
    },
    [sessionId, orderId, cartItems, cartId],
  );

  return (
    <Section>
      <div className="mb-10 mt-4 leading-relaxed xs:mb-12 xs:mt-5 xs:text-lg sm:mb-16 sm:mt-5 md:mt-10">
        Payment successfull! <br /> Thank you for trusting{" "}
        <strong>ModernGrains</strong>
      </div>

      <div className="mb-8 text-xl xs:mb-10 xs:text-2xl sm:mb-12">
        Your order has been successfully placed. You can check your order status
        by clicking the link below
      </div>

      <div className="mb-12 flex justify-end xs:mb-20 sm:mb-32">
        <Link
          to="/account/profile/purchase-history"
          className="flex items-center justify-end gap-2 text-sm opacity-85 hover:underline xs:text-base"
        >
          <span>View purchase history </span>
          <span>
            <HiArrowRight />
          </span>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link
          to="/"
          className="inline-block rounded-full bg-stone-800 px-8 py-3 font-bold text-amber-50 focus:ring focus:ring-lime-600 sm:px-10 sm:text-lg"
          autoFocus
        >
          Back to Home
        </Link>
      </div>
    </Section>
  );
}

export default Success;
