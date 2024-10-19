import { Link } from "react-router-dom";

function Button({ type, children, className, ...props }) {
  const primaryBtnClass =
    " rounded-full bg-lime-800 py-2 tracking-wide text-amber-50 transition-all duration-300 hover:bg-lime-700 ";

  const secondaryBtnClass =
    "rounded-full px-4 py-2 text-xs font-medium tracking-wider text-amber-50 transition-all duration-300 hover:cursor-pointer hover:bg-lime-900 sm:text-sm md:px-6 md:py-3 md:text-base";

  if (type === "hero-cta")
    return (
      <Link
        to="/products"
        className={
          "absolute bottom-[3rem] right-[1.5rem] px-6 font-bold xs:px-8 xs:text-xl sm:bottom-[4rem] sm:right-[3rem] sm:px-9 sm:py-3 sm:text-2xl md:bottom-[5rem] md:right-[4rem]" +
          primaryBtnClass
        }
      >
        {children}
      </Link>
    );

  if (type === "checkout")
    return (
      <button
        {...props}
        className={
          "flex min-w-44 justify-center px-4 text-sm font-semibold xs:px-6 xs:py-3 xs:text-base sm:text-xl md:min-w-60 md:px-8 md:py-4 md:font-bold" +
          primaryBtnClass
        }
      >
        {children}
      </button>
    );

  if (type === "cart-delete")
    return (
      <button {...props} className={secondaryBtnClass + " bg-lime-950"}>
        {children}
      </button>
    );

  if (type === "purchase-history")
    return (
      <Link
        to="/account/profile/purchase-history"
        className={secondaryBtnClass + " block bg-lime-950 text-center"}
      >
        {children}
      </Link>
    );

  if (type === "logout")
    return (
      <button
        {...props}
        className={
          secondaryBtnClass +
          " flex w-full justify-center gap-2 bg-red-600 hover:bg-red-700"
        }
      >
        {children}
      </button>
    );
}

export default Button;
