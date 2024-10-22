import { PiSkipBackBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function BackButtonProduct() {
  const navigate = useNavigate();
  const iconClass = "size-6 md:size-7";
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center justify-center gap-2 rounded-md border border-lime-800 bg-amber-50 py-2 text-xl font-semibold text-lime-800 transition-all duration-200 hover:bg-lime-50 md:py-3.5 md:text-2xl md:font-bold"
    >
      <span>
        <PiSkipBackBold className={iconClass} />
      </span>
      <span>Go back</span>
    </button>
  );
}

export default BackButtonProduct;
