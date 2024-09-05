import { NavLink } from "react-router-dom";
import { scrollToTop } from "../utils/helpers";

function NavLinkListItem({ to, children }) {
  const occupySpaceAndCenter = "flex h-full items-center";
  return (
    <li onClick={scrollToTop} className={occupySpaceAndCenter}>
      <NavLink to={to} className={`${occupySpaceAndCenter} px-2`}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavLinkListItem;
