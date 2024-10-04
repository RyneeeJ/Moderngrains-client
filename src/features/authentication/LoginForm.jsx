import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormButton from "../../ui/FormButton";
import FormInput from "../../ui/FormInput";
import FormInputContainer from "../../ui/FormInputContainer";
import FormRow from "../../ui/FormRow";
import { useLogin } from "./useLogin";

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { login, isLoading } = useLogin();

  function submitLogin(data) {
    login(data);
  }

  return (
    <Form onSubmit={handleSubmit(submitLogin)}>
      <FormInputContainer>
        <FormRow label="Email" id="email">
          <FormInput
            {...register("email", { required: "This field is required" })}
            errorMessage={errors?.email?.message}
            id="email"
            type="email"
          />
        </FormRow>
        <FormRow label="Password" id="password">
          <FormInput
            {...register("password", { required: "This field is required" })}
            errorMessage={errors?.password?.message}
            id="password"
            type="password"
          />
        </FormRow>
      </FormInputContainer>

      <span className="block cursor-pointer text-right text-xs text-amber-100 hover:underline sm:text-sm">
        Forgot password?
      </span>
      <FormButton>{isLoading ? "Logging in..." : "Log in"}</FormButton>

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
