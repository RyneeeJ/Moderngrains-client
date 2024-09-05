import {
  PiHouseLine,
  PiLineVertical,
  PiShoppingCartSimple,
  PiStorefront,
  PiUser,
} from "react-icons/pi";

import NavLinkListItem from "./NavLinkListItem";

function Navigation() {
  const iconClass = "size-5 xs:size-6 md:size-7";
  return (
    <ul className="flex h-full items-center sm:gap-2">
      <NavLinkListItem to="/">
        <PiHouseLine className={iconClass} />
      </NavLinkListItem>

      <NavLinkListItem to="products">
        <PiStorefront className={iconClass} />
      </NavLinkListItem>

      <NavLinkListItem to="/account/cart">
        <PiShoppingCartSimple className={iconClass} />
      </NavLinkListItem>
      <li>
        <PiLineVertical className={iconClass} />
      </li>

      <NavLinkListItem to="/login">
        <span className="text-xs">Log in</span>
      </NavLinkListItem>

      {/* <NavLinkListItem>
        <PiUser className={iconClass} />
      </NavLinkListItem> */}
    </ul>
  );
}

export default Navigation;
