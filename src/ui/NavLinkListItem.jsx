import { NavLink } from "react-router-dom";
import { scrollToTop } from "../utils/helpers";

function NavLinkListItem({ to, children }) {
  const occupySpaceAndCenter = "flex h-full items-center";
  return (
    <li onClick={scrollToTop} className={occupySpaceAndCenter}>
      <NavLink
        to={to}
        className={`${occupySpaceAndCenter} flex items-center px-2 sm:gap-2 md:gap-3`}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavLinkListItem;
