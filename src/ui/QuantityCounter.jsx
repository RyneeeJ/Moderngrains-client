import { PiMinusCircleFill, PiPlusCircleFill } from "react-icons/pi";

function QuantityCounter({ onIncrease, onDecrease, quantity }) {
  const iconClass =
    "xs:size-6 size-5 sm:size-7 fill-lime-800 hover:fill-lime-700 transition-all duration-200";
  return (
    <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5">
      <button onClick={onDecrease}>
        <PiMinusCircleFill className={iconClass} />
      </button>
      <span className="flex w-3 justify-center font-semibold xs:text-xl sm:text-2xl">
        {quantity}
      </span>
      <button onClick={onIncrease}>
        <PiPlusCircleFill className={iconClass} />
      </button>
    </div>
  );
}

export default QuantityCounter;
