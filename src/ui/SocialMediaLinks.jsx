import { PiFacebookLogo, PiInstagramLogo, PiXLogo } from "react-icons/pi";

function SocialMediaLinks() {
  const iconClass = "xs:size-6 size-5 cursor-pointer sm:size-7";
  return (
    <ul className="flex gap-3">
      <li>
        <PiFacebookLogo className={iconClass} />
      </li>
      <li>
        <PiInstagramLogo className={iconClass} />
      </li>
      <li>
        <PiXLogo className={iconClass} />
      </li>
    </ul>
  );
}

export default SocialMediaLinks;
