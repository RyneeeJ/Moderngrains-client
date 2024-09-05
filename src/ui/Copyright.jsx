import { PiCopyright } from "react-icons/pi";

function Copyright() {
  return (
    <div className="xs:text-[10px] text-footerDarkFont text-[8px] font-light sm:text-[12px]">
      <p>
        Copyright{" "}
        <span>
          <PiCopyright className="inline" size={11} />
        </span>{" "}
        2024 by ModernGrains
      </p>
      <p>All rights reserved.</p>
    </div>
  );
}

export default Copyright;
