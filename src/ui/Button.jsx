import { Link } from "react-router-dom";

function Button({ type, children, className, ...props }) {
  if (type === "hero-cta")
    return (
      <Link
        to="/products"
        className={
          "rounded-full bg-lime-800 px-6 py-2 font-bold tracking-wide text-amber-50 " +
          className
        }
      >
        {children}
      </Link>
    );
}

export default Button;
