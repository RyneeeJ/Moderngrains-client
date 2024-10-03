import Form from "../../ui/Form";
import FormButton from "../../ui/FormButton";
import FormInput from "../../ui/FormInput";

function LoginForm() {
  return (
    <Form>
      <div className="mb-2 space-y-5 sm:space-y-7">
        <FormInput label="Email" type="email" />
        <FormInput label="Password" type="password" />
      </div>
      <span className="block cursor-pointer text-right text-xs text-amber-100 hover:underline sm:text-sm">
        Forgot password?
      </span>
      <FormButton>Log in</FormButton>

      <p className="text-sm sm:text-base">
        No account yet? Sign up <span className="underline">here</span>
      </p>
    </Form>
  );
}

export default LoginForm;
