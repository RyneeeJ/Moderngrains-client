import { PiMinusCircle, PiPlusCircle } from "react-icons/pi";

function QuantityCounter({ onIncrease, onDecrease, quantity }) {
  const iconClass = "xs:size-6 size-5 sm:size-7";
  return (
    <div className="xs:gap-1 flex items-center gap-0.5">
      <button onClick={onDecrease}>
        <PiMinusCircle className={iconClass} />
      </button>
      <span className="xs:text-xl sm:text-2xl">{quantity}</span>
      <button onClick={onIncrease}>
        <PiPlusCircle className={iconClass} />
      </button>
    </div>
  );
}

export default QuantityCounter;
