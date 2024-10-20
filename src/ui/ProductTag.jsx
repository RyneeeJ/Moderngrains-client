function ProductTag({ type }) {
  return (
    <div
      className={`absolute -left-10 top-5 flex w-36 -rotate-45 justify-center text-xs text-amber-50 ${type === "best" ? "bg-yellow-700" : "bg-red-600"} font-semibold xs:py-0.5 xs:text-sm`}
    >
      {type === "best" && "Bestseller"}
      {type === "unavailable" && "Out of stock"}
    </div>
  );
}

export default ProductTag;
