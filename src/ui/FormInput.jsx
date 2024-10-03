function FormInput({ label, type }) {
  return (
    <div className="flex flex-col items-start">
      <label className="mb-2 text-xs sm:text-sm">{label}</label>
      <input
        className="w-full rounded-sm bg-amber-50 px-2 py-1 text-lime-800 sm:text-lg"
        type={type}
      />
    </div>
  );
}

export default FormInput;
