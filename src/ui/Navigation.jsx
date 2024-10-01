import {
  PiHouseLine,
  PiLineVertical,
  PiShoppingCartSimple,
  PiStorefront,
  PiUser,
} from "react-icons/pi";

import NavLinkListItem from "./NavLinkListItem";
import { useUser } from "../features/authentication/useUser";

function Navigation() {
  const { data: user, isLoading } = useUser();

  // I didnt use suspense loader here to avoid loading spinner in the header navigation
  if (isLoading) return null;

  const iconClass = "size-5 xs:size-6 md:size-7";
  return (
    <ul className="flex h-full items-center sm:gap-2">
      <NavLinkListItem to="/">
        <PiHouseLine className={iconClass} />
      </NavLinkListItem>

      <NavLinkListItem to="products">
        <PiStorefront className={iconClass} />
      </NavLinkListItem>

      {user && (
        <>
          <NavLinkListItem to="/account/cart">
            <PiShoppingCartSimple className={iconClass} />
          </NavLinkListItem>
          <NavLinkListItem to="/account/profile">
            <PiUser className={iconClass} />
          </NavLinkListItem>
        </>
      )}
      {!user && (
        <>
          <li>
            <PiLineVertical className={iconClass} />
          </li>

          <NavLinkListItem to="/login">
            <span className="text-xs font-semibold xs:text-sm md:text-base">
              Log in
            </span>
          </NavLinkListItem>
        </>
      )}
    </ul>
  );
}

export default Navigation;
