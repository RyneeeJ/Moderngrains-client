import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import FormInputContainer from "../../ui/FormInputContainer";
import FormInput from "../../ui/FormInput";
import FormButton from "../../ui/FormButton";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useSignup } from "./useSignup";

function SignupForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { signup, isSigningUp } = useSignup();
  function submitSignup(data) {
    signup({ email: data.email, password: data.password, name: data.name });
  }

  return (
    <Form onSubmit={handleSubmit(submitSignup)}>
      <FormInputContainer>
        <FormRow
          errorMessage={errors?.name?.message}
          label="Full Name"
          id="name"
        >
          <FormInput
            {...register("name", { required: "This field is required" })}
            id="name"
            type="text"
            error={errors?.name}
            disabled={isSigningUp}
          />
        </FormRow>
        <FormRow errorMessage={errors?.email?.message} label="Email" id="email">
          <FormInput
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email",
              },
            })}
            error={errors?.email}
            id="email"
            type="email"
            disabled={isSigningUp}
          />
        </FormRow>

        <FormRow
          errorMessage={errors?.password?.message}
          label="Password"
          id="password"
        >
          <FormInput
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Minimum of 8 characters",
              },
            })}
            error={errors?.password}
            id="password"
            type="password"
            disabled={isSigningUp}
          />
        </FormRow>
        <FormRow
          errorMessage={errors?.confirmPassword?.message}
          label="Confirm password"
          id="confirmPassword"
        >
          <FormInput
            {...register("confirmPassword", {
              required: "This field is required",
              validate: (value) =>
                value === getValues("password") || "Password do not match",
            })}
            error={errors?.confirmPassword}
            id="confirmPassword"
            type="password"
            disabled={isSigningUp}
          />
        </FormRow>
      </FormInputContainer>

      <FormButton disabled={isSigningUp}>Sign up</FormButton>

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
