import SignupForm from "../features/authentication/SignupForm";
import Section from "../ui/Section";

function Signup() {
  return (
    <Section additionalClass="h-[90vh] flex items-center">
      <SignupForm />
    </Section>
  );
}

export default Signup;
