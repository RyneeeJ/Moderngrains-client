function UserDetailInput({ defaultValue, disabled, setValue }) {
  return (
    <>
      <input
        type="text"
        defaultValue={defaultValue}
        disabled={disabled}
        className="grow rounded-md bg-neutral-50 px-3 py-1 text-sm text-lime-800 ring-1 disabled:bg-neutral-200 disabled:ring-0 xs:text-base sm:px-4 sm:py-2 sm:text-lg md:text-xl"
      />

      <span
        onClick={() => setValue((value) => !value)}
        className="flex w-10 cursor-pointer justify-center text-xs text-stone-500 hover:underline xs:text-sm sm:text-base md:text-lg"
      >
        {disabled ? "Edit" : "Save"}
      </span>
    </>
  );
}

export default UserDetailInput;
