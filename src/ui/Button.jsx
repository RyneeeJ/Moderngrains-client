import { Link } from "react-router-dom";

function Button({ type, children, className, ...props }) {
  if (type === "hero-cta")
    return (
      <Link
        to="/products"
        className="absolute bottom-[3rem] right-[1.5rem] rounded-full bg-lime-800 px-6 py-2 font-bold tracking-wide text-amber-50 transition-all duration-300 hover:bg-lime-700 xs:px-8 xs:text-xl sm:bottom-[4rem] sm:right-[3rem] sm:px-9 sm:py-3 sm:text-2xl md:bottom-[5rem] md:right-[4rem]"
      >
        {children}
      </Link>
    );

  if (type === "cart-delete")
    return (
      <button
        {...props}
        className="rounded-full bg-lime-950 px-4 py-2 text-xs font-medium tracking-wider text-amber-50 transition-all duration-300 hover:cursor-pointer hover:bg-lime-900"
      >
        {children}
      </button>
    );
}

export default Button;
