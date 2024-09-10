import { Link } from "react-router-dom";

function Button({ type, children, className, ...props }) {
  const primaryBtnClass =
    " rounded-full bg-lime-800 py-2 tracking-wide text-amber-50 transition-all duration-300 hover:bg-lime-700 ";

  const secondaryBtnClass =
    "rounded-full bg-lime-950 px-4 py-2 text-xs font-medium tracking-wider text-amber-50 transition-all duration-300 hover:cursor-pointer hover:bg-lime-900 sm:text-sm md:px-6 md:py-3 md:text-base";
  ("rounded-full bg-lime-950 px-4 py-2 text-xs font-medium tracking-wider text-amber-50 transition-all duration-300 hover:cursor-pointer hover:bg-lime-900 sm:text-sm md:px-6 md:py-3 md:text-base");

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
          "px-4 text-sm font-semibold xs:px-6 xs:py-3 xs:text-base sm:text-xl md:px-8 md:py-4 md:font-bold" +
          primaryBtnClass
        }
      >
        {children}
      </button>
    );

  if (type === "cart-delete")
    return <button className={secondaryBtnClass}>{children}</button>;

  if (type === "purchase-history")
    return (
      <Link
        to="/account/profile/purchase-history"
        className={secondaryBtnClass}
      >
        {children}
      </Link>
    );
}

export default Button;
