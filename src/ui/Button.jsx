import { Link } from "react-router-dom";

function Button({ type, children, className, ...props }) {
  if (type === "hero-cta")
    return (
      <Link
        to="/products"
        className={
          "xs:px-8 xs:text-xl rounded-full bg-lime-800 px-6 py-2 font-bold tracking-wide text-amber-50 transition-all duration-300 hover:bg-lime-700 sm:px-9 sm:py-3 sm:text-2xl " +
          className
        }
      >
        {children}
      </Link>
    );
}

export default Button;
