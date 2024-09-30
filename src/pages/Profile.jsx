import { Suspense } from "react";

import UserProfile from "../features/profile/UserProfile";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Loader from "../ui/Loader";

function Profile() {
  return (
    <Section>
      <SectionHeading>Ryne's Profile</SectionHeading>

      <Suspense fallback={<Loader />}>
        <UserProfile />
      </Suspense>
    </Section>
  );
}

export default Profile;
