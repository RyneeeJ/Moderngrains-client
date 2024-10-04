import { useNavigate } from "react-router-dom";
import Form from "../../ui/Form";
import FormButton from "../../ui/FormButton";
import FormInput from "../../ui/FormInput";
import FormInputContainer from "../../ui/FormInputContainer";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <Form>
      <FormInputContainer>
        <FormInput label="Email" type="email" />
        <FormInput label="Password" type="password" />
      </FormInputContainer>

      <span className="block cursor-pointer text-right text-xs text-amber-100 hover:underline sm:text-sm">
        Forgot password?
      </span>
      <FormButton>Log in</FormButton>

      <p className="text-sm sm:text-base">
        No account yet? Sign up{" "}
        <span
          onClick={() => navigate("/signup")}
          className="underline hover:cursor-pointer"
        >
          here
        </span>
      </p>
    </Form>
  );
}

export default LoginForm;
