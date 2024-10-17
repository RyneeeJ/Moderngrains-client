import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1, { replace: true })}
      className="min-w-60 rounded-full bg-stone-800 py-2 font-semibold text-amber-50 transition-all duration-200 hover:bg-stone-700"
    >
      Go back
    </button>
  );
}

export default BackButton;
