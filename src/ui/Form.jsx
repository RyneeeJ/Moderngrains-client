function Form({ children, type, onSubmit }) {
  return (
    <div className="mx-auto w-full max-w-lg rounded-md bg-yellow-700 px-8 py-10 text-center text-amber-100">
      <div className="flex flex-col">
        <h2 className="mb-2 text-3xl font-semibold sm:text-4xl">
          ModernGrains
        </h2>
        <span className="mb-5 text-sm sm:mb-8 sm:text-base">
          {type === "login" ? "Log in your account" : "Create an account"}
        </span>
        <form onSubmit={onSubmit} className="w-full max-w-sm self-center">
          {children}
        </form>
      </div>
    </div>
  );
}

export default Form;
