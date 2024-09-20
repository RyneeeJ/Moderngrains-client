import { useState } from "react";
import Avatar from "./Avatar";

import ProfileDetailsContainer from "./ProfileDetailsContainer";
import UserDetailInput from "./UserDetailInput";

import Button from "../../ui/Button";

function UserProfile() {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <Avatar />
      <div className="mb-4 sm:text-lg md:text-xl">**********ia@gmail.com</div>
      <div className="mb-6 w-72 xs:w-3/4">
        <ProfileDetailsContainer label="Name">
          <UserDetailInput
            disabled={!isEditingName}
            defaultValue="Ryne Gandia"
            setValue={setIsEditingName}
          />
        </ProfileDetailsContainer>
        <ProfileDetailsContainer label="Address">
          <UserDetailInput
            disabled={!isEditingAddress}
            defaultValue="San Leonardo, Nueva Ecija"
            setValue={setIsEditingAddress}
          />
        </ProfileDetailsContainer>
      </div>
      <Button type="purchase-history">View Purchase History</Button>
    </div>
  );
}

export default UserProfile;
