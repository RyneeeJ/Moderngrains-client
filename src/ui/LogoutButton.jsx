import { useLogout } from "../features/authentication/useLogout";
import Button from "./Button";

function LogoutButton() {
  const { logout, isLoggingOut } = useLogout();
  return (
    <Button onClick={logout} disabled={isLoggingOut} type="logout">
      {isLoggingOut ? "Logging out..." : "Log out"}
    </Button>
  );
}

export default LogoutButton;
