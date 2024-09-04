import {
  PiHouseLine,
  PiLineVertical,
  PiShoppingCartSimple,
  PiStorefront,
  PiUser,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../utils/helpers";

function Navigation() {
  return (
    <ul className="flex items-center gap-3">
      <li onClick={scrollToTop}>
        <NavLink to="/">
          <PiHouseLine size={18} />
        </NavLink>
      </li>
      <li>
        <NavLink to="/products">
          <PiStorefront size={18} />
        </NavLink>
      </li>
      <li>
        <NavLink to="/account/cart">
          <PiShoppingCartSimple size={18} />
        </NavLink>
      </li>
      <li>
        <PiLineVertical />
      </li>
      <li>
        <span className="text-xs">Log in</span>
      </li>
      {/* <li>
        <PiUser size={18} />
      </li> */}
    </ul>
  );
}

export default Navigation;
