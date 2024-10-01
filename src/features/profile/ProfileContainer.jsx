import SectionHeading from "../../ui/SectionHeading";
import { useGetProfile } from "./useGetProfile";
import UserProfile from "./UserProfile";

function ProfileContainer() {
  const { data } = useGetProfile();
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
