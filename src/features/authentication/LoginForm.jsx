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
  } = useForm();

  const { login, isLoading, status } = useLogin();

  function submitLogin(data) {
    login(data);
  }

  return (
    <Form onSubmit={handleSubmit(submitLogin)}>
      <FormInputContainer>
        <FormRow errorMessage={errors?.email?.message} label="Email" id="email">
          <FormInput
            {...register("email", { required: "This field is required" })}
            error={errors?.email}
            id="email"
            type="email"
          />
        </FormRow>
        <FormRow
          errorMessage={errors?.password?.message}
          label="Password"
          id="password"
        >
          <FormInput
            {...register("password", { required: "This field is required" })}
            error={errors?.password}
            id="password"
            type="password"
          />
        </FormRow>
      </FormInputContainer>

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
