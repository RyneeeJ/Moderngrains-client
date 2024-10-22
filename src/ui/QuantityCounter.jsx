import { PiMinusCircleFill, PiPlusCircleFill } from "react-icons/pi";

function QuantityCounter({ onIncrease, onDecrease, quantity, type = "large" }) {
  const iconClass =
    type === "small"
      ? "size-5 xs:size-6 sm:size-7 fill-lime-800 hover:fill-lime-700 transition-all duration-200"
      : "size-7 xs:size-8 sm:size-9 fill-lime-800 hover:fill-lime-700 transition-all duration-200";

  const textSize =
    type === "small" ? "xs:text-xl sm:text-2xl" : "text-2xl xs:text-3xl";
  return (
    <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5">
      <button onClick={onDecrease}>
        <PiMinusCircleFill className={iconClass} />
      </button>
      <span className={`flex w-3 justify-center font-semibold ${textSize}`}>
        {quantity}
      </span>
      <button onClick={onIncrease}>
        <PiPlusCircleFill className={iconClass} />
      </button>
    </div>
  );
}

export default QuantityCounter;
