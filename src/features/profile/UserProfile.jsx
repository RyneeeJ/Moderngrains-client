import Avatar from "./Avatar";

import UserDetailInput from "./UserDetailInput";

import Button from "../../ui/Button";
import { useGetProfile } from "./useGetProfile";

function UserProfile() {
  const { data, isLoading, error } = useGetProfile();
  const { address, avatar, email, name, id } = data;

  return (
    <div className="flex flex-col items-center">
      <Avatar avatar={avatar} userId={id} />
      <div className="mb-6 sm:text-lg md:text-xl">{email}</div>
      <div className="mb-6 w-72 xs:w-3/4">
        <UserDetailInput defaultValue={name} userId={id} field="name" />
        <UserDetailInput defaultValue={address} userId={id} field="address" />
      </div>
      <Button type="purchase-history">View Purchase History</Button>
    </div>
  );
}

export default UserProfile;
