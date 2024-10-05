import { forwardRef } from "react";

const FormInput = forwardRef(function FormInput(
  { label, type, id, error, ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      id={id}
      {...rest}
      className={`w-full rounded-sm px-2 py-1 text-lime-800 sm:text-lg ${error ? "bg-red-100" : "bg-amber-50"}`}
      type={type}
    />
  );
});

export default FormInput;
