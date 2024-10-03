function FormButton({ children }) {
  return (
    <button className="mb-4 mt-8 w-full rounded-full bg-lime-800 px-5 py-2 font-bold transition-all duration-200 hover:bg-lime-700 sm:mt-10 sm:py-3 sm:text-lg">
      {children}
    </button>
  );
}

export default FormButton;
