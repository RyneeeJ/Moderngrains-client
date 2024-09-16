function ModalConfirmButton({ children, onClick, disabled }) {
  return (
    <button
      className="rounded-full bg-amber-50 px-6 py-2 font-bold text-lime-950 transition-all duration-200 hover:bg-lime-50 focus:ring focus:ring-lime-600 sm:px-10 sm:py-3 sm:text-lg"
      autoFocus
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ModalConfirmButton;
