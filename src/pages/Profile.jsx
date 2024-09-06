import Avatar from "../features/profile/Avatar";
import UserProfile from "../features/profile/UserProfile";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

function Profile() {
  return (
    <Section>
      <SectionHeading>Ryne's Profile</SectionHeading>

      <UserProfile />
    </Section>
  );
}

export default Profile;
