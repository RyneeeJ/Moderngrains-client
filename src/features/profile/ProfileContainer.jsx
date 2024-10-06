import SectionHeading from "../../ui/SectionHeading";
import { useUser } from "../authentication/useUser";
import { useGetProfile } from "./useGetProfile";
import UserProfile from "./UserProfile";

function ProfileContainer() {
  const { data, error } = useGetProfile();

  if (error) console.log("ERROR", error.message);

  const { address, avatar, email, name, id } = data;
  return (
    <>
      <SectionHeading>{name}'s profile</SectionHeading>

      <UserProfile
        address={address}
        avatar={avatar}
        email={email}
        name={name}
        id={id}
      />
    </>
  );
}

export default ProfileContainer;
