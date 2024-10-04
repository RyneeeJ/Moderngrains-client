import { useNavigate } from "react-router-dom";
import FormInputContainer from "../../ui/FormInputContainer";
import FormInput from "../../ui/FormInput";
import FormButton from "../../ui/FormButton";
import Form from "../../ui/Form";

function SignupForm() {
  const navigate = useNavigate();
  return (
    <Form>
      <FormInputContainer>
        <div className="flex gap-5">
          <FormInput label="First Name" type="text" />
          <FormInput label="Last Name" type="text" />
        </div>
        <FormInput label="Email" type="email" />
        <FormInput label="Password" type="password" />
        <FormInput label="Confirm password" type="password" />
      </FormInputContainer>

      <FormButton>Sign up</FormButton>

      <p className="text-sm sm:text-base">
        Already have an account? Log in{" "}
        <span
          onClick={() => navigate("/login")}
          className="underline hover:cursor-pointer"
        >
          here
        </span>
      </p>
    </Form>
  );
}

export default SignupForm;
