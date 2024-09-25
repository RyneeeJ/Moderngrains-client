import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDeleteCheckedOut } from "../features/cart/useDeleteCheckedOut";
import Section from "../ui/Section";
import { HiArrowRight } from "react-icons/hi";
import { useCartItems } from "../features/cart/useCartItems";
import { useAddOrder } from "../features/orders/useAddOrder";

function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const { isDeleting, deleteCheckedOut } = useDeleteCheckedOut();

  const { cartItems } = useCartItems();

  const { placeOrder, isPlacingOrder } = useAddOrder();
  const checkedOutItems = cartItems.filter((item) => item.isConfirmed === true);
  const priceIdArr = checkedOutItems.map((item) => item.stripeId);

  useEffect(function () {
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

          placeOrder(ordersArr);

          deleteCheckedOut(priceIdArr);
        }
      } catch (e) {
        console.log(e.message);
      }
    }

    success();
  }, []);

  return (
    <Section>
      <div className="mb-10 mt-4 leading-relaxed xs:mb-12 xs:mt-5 xs:text-lg sm:mb-16 sm:mt-5 md:mt-10">
        Payment successfull! <br /> Thank you for trusting{" "}
        <strong>ModernGrains</strong>
      </div>

      <div className="mb-8 text-xl xs:mb-10 xs:text-2xl sm:mb-12">
        Your <span className="font-semibold">order #3219263</span> has been
        successfully placed. You can check your order status by clicking the
        link below
      </div>

      <Link className="mb-12 flex items-center justify-end gap-2 text-sm opacity-85 hover:underline xs:mb-20 xs:text-base sm:mb-32">
        <span>View order status </span>
        <span>
          <HiArrowRight />
        </span>
      </Link>

      <div className="flex justify-center">
        <Link
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
