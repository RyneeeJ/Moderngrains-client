import Section from "../ui/Section";
import ProfileContainer from "../features/profile/ProfileContainer";
import { Suspense } from "react";
import Loader from "../ui/Loader";

function Profile() {
  return (
    <Section>
      <Suspense fallback={<Loader />}>
        <ProfileContainer />
      </Suspense>
    </Section>
  );
}

export default Profile;
