import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/helpers";

import logodark from "/logodark.png";
import logolight from "/logolight.png";
function Logo({ type }) {
  return (
    <div onClick={scrollToTop}>
      <Link to="/">
        {type === "dark" && (
          <img
            src={logodark}
            alt="dark logo of ModernGrains"
            className="w-40 xs:min-w-48 sm:w-52 md:min-w-60"
          />
        )}
        {type === "light" && (
          <img
            src={logolight}
            alt="light logo of ModernGrains"
            className="w-40 xs:min-w-48 sm:w-52 md:min-w-60"
          />
        )}
      </Link>
    </div>
  );
}

export default Logo;
