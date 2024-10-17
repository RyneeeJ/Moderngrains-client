import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../utils/helpers";

function FooterList({ title, linksArr }) {
  const navigate = useNavigate();

  function handleClick(link) {
    if (title !== "Products") return;
    navigate(`/products?category=${link.toLowerCase()}`);
    scrollToTop();
    window.location.reload();
  }
  return (
    <div className="space-y-3 font-light">
      <p className="text-xs xs:text-base sm:text-xl">{title}</p>
      <ul className="space-y-[2px] text-[8px] text-footerDarkFont xs:text-[12px] sm:text-[14px]">
        {linksArr.map((link, i) => (
          <li
            key={i}
            onClick={() => handleClick(link)}
            className="cursor-pointer hover:underline"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
