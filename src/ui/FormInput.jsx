import { forwardRef } from "react";

const FormInput = forwardRef(function FormInput(
  { label, type, id, ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      id={id}
      {...rest}
      className="w-full rounded-sm bg-amber-50 px-2 py-1 text-lime-800 sm:text-lg"
      type={type}
    />
  );
});

export default FormInput;
