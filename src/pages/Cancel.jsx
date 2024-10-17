import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Section from "../ui/Section";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import BackToHomeButton from "../ui/BackToHomeButton";

function Cancel() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useDocumentTitle("MGrains | Payment Cancelled");

  if (!sessionId) return <Navigate to="/" replace />;

  return (
    <Section additionalClass="h-screen flex justify-center items-center">
      <div className="translate-y-[-50%] text-center text-xl sm:text-2xl">
        <div className="mb-2 sm:mb-4">Payment cancelled</div>
        <div className="mb-10 sm:mb-16">Checkout when you're ready 😊</div>
        <BackToHomeButton />
      </div>
    </Section>
  );
}

export default Cancel;
