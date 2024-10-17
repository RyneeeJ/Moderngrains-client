function ButtonConfirmAvatar({ onClick, disabled, type, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex min-h-8 w-20 justify-center rounded-full px-3 py-1.5 text-sm font-light text-amber-50 transition-all duration-200 ${type === "save" ? "bg-lime-700 hover:bg-lime-800" : "bg-red-600 hover:bg-red-700"}`}
    >
      {children}
    </button>
  );
}

export default ButtonConfirmAvatar;
