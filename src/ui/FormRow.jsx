function FormRow({ children, id, label, errorMessage }) {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-2 flex w-full justify-between">
        <label htmlFor={id} className="text-xs sm:text-sm">
          {label}
        </label>
        <div className="text-xs text-red-100">{errorMessage}</div>
      </div>
      {children}
    </div>
  );
}

export default FormRow;
