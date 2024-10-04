function FormRow({ children, id, label }) {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={id} className="mb-2 text-xs sm:text-sm">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormRow;
