import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/helpers";

function Logo() {
  return (
    <div onClick={scrollToTop}>
      <Link to="/">LOGO</Link>
    </div>
  );
}

export default Logo;
