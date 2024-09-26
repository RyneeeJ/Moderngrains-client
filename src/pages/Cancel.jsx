import { useNavigate } from "react-router-dom";
import Section from "../ui/Section";

function Cancel() {
  const navigate = useNavigate();
  return (
    <Section additionalClass="h-screen flex justify-center items-center">
      <div className="translate-y-[-50%] text-center text-xl sm:text-2xl">
        <div className="mb-2 sm:mb-4">Payment cancelled</div>
        <div className="mb-10 sm:mb-16">Checkout when you're ready 😊</div>
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
          className="inline-block rounded-full bg-stone-800 px-6 py-2 font-semibold text-amber-50 transition-all duration-200 hover:bg-stone-700 sm:px-8 sm:py-3"
        >
          Back to Home
        </button>
      </div>
    </Section>
  );
}

export default Cancel;
