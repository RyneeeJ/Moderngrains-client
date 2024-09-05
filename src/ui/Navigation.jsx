import {
  PiHouseLine,
  PiLineVertical,
  PiShoppingCartSimple,
  PiStorefront,
  PiUser,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../utils/helpers";
import NavLinkListItem from "./NavLinkListItem";

function Navigation() {
  return (
    <ul className="flex h-full items-center">
      <NavLinkListItem to="/" onClick={scrollToTop}>
        <PiHouseLine size={18} />
      </NavLinkListItem>

      <NavLinkListItem to="products">
        <PiStorefront size={18} />
      </NavLinkListItem>

      <NavLinkListItem to="/account/cart">
        <PiShoppingCartSimple size={18} />
      </NavLinkListItem>
      <li>
        <PiLineVertical />
      </li>

      <NavLinkListItem to="/login">
        <span className="text-xs">Log in</span>
      </NavLinkListItem>

      {/* <NavLinkListItem>
        <PiUser size={18} />
      </NavLinkListItem> */}
    </ul>
  );
}

export default Navigation;
