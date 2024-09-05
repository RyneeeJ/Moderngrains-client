import { NavLink } from "react-router-dom";

function NavLinkListItem({ to, children, ...props }) {
  const occupySpaceAndCenter = "flex h-full items-center";
  return (
    <li {...props} className={occupySpaceAndCenter}>
      <NavLink to={to} className={`${occupySpaceAndCenter} px-2`}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavLinkListItem;
