import Avatar from "./Avatar";
import UserDetailInput from "./UserDetailInput";
import Button from "../../ui/Button";
import LogoutButton from "../../ui/LogoutButton";

function UserProfile({ address, avatar, email, name, id }) {
  return (
    <div className="flex flex-col items-center">
      <Avatar avatar={avatar} userId={id} />
      <div className="mb-6 sm:text-lg md:text-xl">{email}</div>
      <div className="mb-6 w-72 xs:w-3/4">
        <UserDetailInput defaultValue={name} userId={id} field="name" />
        <UserDetailInput
          defaultValue={address}
          placeholder="Enter your address"
          userId={id}
          field="address"
        />
      </div>
      <div className="space-y-3 sm:space-y-5">
        <Button type="purchase-history">View Purchase History</Button>
        <LogoutButton />
      </div>
    </div>
  );
}

export default UserProfile;
