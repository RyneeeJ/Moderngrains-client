import { useNavigate } from "react-router-dom";
import Section from "./Section";

function ErrorFallback({ error, resetErrorBoundary }) {
  const navigate = useNavigate();
  return (
    <Section>
      <div className="text-center text-2xl">
        <p>Something went wrong ☹️</p>
        <p>{error.message}</p>
      </div>
      <button onClick={() => navigate(-1)}>Go back &rarr;</button>
    </Section>
  );
}

export default ErrorFallback;
