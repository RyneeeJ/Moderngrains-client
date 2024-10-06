import LoginForm from "../features/authentication/LoginForm";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Section from "../ui/Section";

function Login() {
  useDocumentTitle("MGrains | Login");
  return (
    <Section additionalClass="h-[90vh] flex items-center">
      <LoginForm />
    </Section>
  );
}

export default Login;
