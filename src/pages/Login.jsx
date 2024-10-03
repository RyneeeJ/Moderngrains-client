import LoginForm from "../features/authentication/LoginForm";
import Section from "../ui/Section";

function Login() {
  return (
    <Section additionalClass="h-[90vh] flex items-center">
      <LoginForm />
    </Section>
  );
}

export default Login;
