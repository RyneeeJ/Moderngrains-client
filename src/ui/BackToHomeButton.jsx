import { Link } from "react-router-dom";

function BackToHomeButton() {
  return (
    <Link
      to="/"
      className="inline-block rounded-full bg-stone-800 px-8 py-3 font-bold text-amber-50 focus:ring focus:ring-lime-600 sm:px-10 sm:text-lg"
      autoFocus
    >
      Back to Home
    </Link>
  );
}

export default BackToHomeButton;
