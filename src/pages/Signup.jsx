import SignupForm from "../features/authentication/SignupForm";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Section from "../ui/Section";

function Signup() {
  useDocumentTitle("MGrains | Signup");
  return (
    <Section additionalClass="h-[90vh] flex items-center">
      <SignupForm />
    </Section>
  );
}

export default Signup;
