function OrdersFilterButton({ children, onClick, currentFilter, value }) {
  const activeClass = "bg-yellow-700 text-amber-50";

  return (
    <button
      onClick={onClick}
      className={`rounded-md px-2 py-0.5 text-xs transition-all duration-150 hover:bg-yellow-700 hover:text-amber-50 sm:text-sm md:text-base ${currentFilter === value ? activeClass : ""}`}
    >
      {children}
    </button>
  );
}

export default OrdersFilterButton;
