import {
  PiHouseLine,
  PiLineVertical,
  PiShoppingCartSimple,
  PiSignIn,
  PiStorefront,
  PiUser,
} from "react-icons/pi";

import NavLinkListItem from "./NavLinkListItem";
import { useUser } from "../features/authentication/useUser";
import NavLinkLabel from "./NavLinkLabel";

function Navigation() {
  const { user, isLoading, isAuthenticated } = useUser();

  // I didnt use suspense loader here to avoid loading spinner in the header navigation
  if (isLoading) return null;

  const iconClass = "size-5 xs:size-6 md:size-7";
  return (
    <ul className="flex h-full items-center sm:gap-2">
      <NavLinkListItem to="/">
        <PiHouseLine className={iconClass} />
        <NavLinkLabel>Home</NavLinkLabel>
      </NavLinkListItem>

      <NavLinkListItem to="products">
        <PiStorefront className={iconClass} />
        <NavLinkLabel>Shop</NavLinkLabel>
      </NavLinkListItem>

      {user && isAuthenticated && (
        <>
          <NavLinkListItem to="/account/cart">
            <PiShoppingCartSimple className={iconClass} />
            <NavLinkLabel>Cart</NavLinkLabel>
          </NavLinkListItem>
          <NavLinkListItem to="/account/profile">
            <PiUser className={iconClass} />
            <NavLinkLabel>Profile</NavLinkLabel>
          </NavLinkListItem>
        </>
      )}
      {!user && (
        <NavLinkListItem to="/login">
          <PiSignIn className={iconClass} />
          <NavLinkLabel>Log in</NavLinkLabel>
        </NavLinkListItem>
      )}
    </ul>
  );
}

export default Navigation;
