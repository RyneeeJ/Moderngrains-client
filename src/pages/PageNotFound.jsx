import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center gap-14 px-10 text-center">
      <div className="text-3xl">The page you requested could not be found.</div>
      <button
        onClick={() => navigate(-1)}
        className="rounded-full bg-stone-800 px-10 py-3 text-xl font-semibold uppercase text-amber-50 transition-all duration-300 hover:bg-neutral-700 focus:opacity-80 focus:ring-stone-600"
      >
        Go back
      </button>
    </div>
  );
}

export default PageNotFound;
