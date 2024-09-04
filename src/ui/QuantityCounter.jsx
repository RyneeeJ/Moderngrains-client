import { PiMinusCircle, PiPlusCircle } from "react-icons/pi";

function QuantityCounter({ onIncrease, onDecrease, quantity }) {
  return (
    <div className="flex items-center gap-1">
      <button onClick={onDecrease}>
        <PiMinusCircle size={18} />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <PiPlusCircle size={18} />
      </button>
    </div>
  );
}

export default QuantityCounter;
