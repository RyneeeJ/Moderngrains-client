import { PiFacebookLogo, PiInstagramLogo, PiXLogo } from "react-icons/pi";

function SocialMediaLinks() {
  return (
    <ul className="flex gap-3">
      <li>
        <PiFacebookLogo size={18} />
      </li>
      <li>
        <PiInstagramLogo size={18} />
      </li>
      <li>
        <PiXLogo size={18} />
      </li>
    </ul>
  );
}

export default SocialMediaLinks;
