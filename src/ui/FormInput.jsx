import { forwardRef } from "react";

const FormInput = forwardRef(function FormInput(
  { label, type, id, errorMessage, ...rest },
  ref,
) {
  return (
    <>
      <input
        ref={ref}
        id={id}
        {...rest}
        className={`w-full rounded-sm px-2 py-1 text-lime-800 sm:text-lg ${errorMessage ? "bg-red-100" : "bg-amber-50"} placeholder:text-sm placeholder:text-red-400`}
        type={type}
        placeholder={errorMessage}
      />
    </>
  );
});

export default FormInput;
