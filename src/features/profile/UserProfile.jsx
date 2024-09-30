import { useState } from "react";
import Avatar from "./Avatar";

import ProfileDetailsContainer from "./ProfileDetailsContainer";
import UserDetailInput from "./UserDetailInput";

import Button from "../../ui/Button";
import { useGetProfile } from "./useGetProfile";

function UserProfile() {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const { data, isLoading, error } = useGetProfile();

  const { address, avatar, email, name, id } = data;
  return (
    <div className="flex flex-col items-center">
      <Avatar avatar={avatar} />
      <div className="mb-4 sm:text-lg md:text-xl">{email}</div>
      <div className="mb-6 w-72 xs:w-3/4">
        <ProfileDetailsContainer label="Name">
          <UserDetailInput
            disabled={!isEditingName}
            defaultValue={name}
            setIsEditing={setIsEditingName}
            userId={id}
            field="name"
          />
        </ProfileDetailsContainer>
        <ProfileDetailsContainer isEditing={isEditingAddress} label="Address">
          <UserDetailInput
            disabled={!isEditingAddress}
            defaultValue={address}
            setIsEditing={setIsEditingAddress}
            userId={id}
            field="address"
          />
        </ProfileDetailsContainer>
      </div>
      <Button type="purchase-history">View Purchase History</Button>
    </div>
  );
}

export default UserProfile;
