function PaymentMethod() {
  return (
    <div className="mb-6 space-y-1">
      <span className="text-xs xs:text-sm sm:text-base md:text-lg">
        Payment Method
      </span>
      <div className="rounded-md bg-neutral-200 px-3 py-1 text-sm text-lime-800 xs:text-base sm:px-4 sm:py-2 sm:text-lg md:text-xl">
        Cash on Delivery (COD)
      </div>
    </div>
  );
}

export default PaymentMethod;
