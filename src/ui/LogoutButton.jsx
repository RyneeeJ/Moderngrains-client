import { PiSignOutBold } from "react-icons/pi";
import { useLogout } from "../features/authentication/useLogout";
import Button from "./Button";

function LogoutButton() {
  const { logout, isLoggingOut } = useLogout();
  return (
    <Button onClick={logout} disabled={isLoggingOut} type="logout">
      {isLoggingOut ? "Logging out..." : "Log out"}
      <PiSignOutBold className="size-4 sm:size-5 md:size-6" />
    </Button>
  );
}

export default LogoutButton;
