import { PiPencilSimple } from "react-icons/pi";

function Avatar({ avatar }) {
  return (
    <div className="relative mb-2 w-28 md:w-36">
      <img
        src={avatar}
        alt="Profile image"
        className="aspect-square h-full w-full rounded-full"
      />

      <div className="absolute right-1 top-0 cursor-pointer rounded-full border-[3px] border-amber-50 bg-zinc-800 p-0.5 md:right-2 md:p-1">
        <PiPencilSimple className="size-5 text-amber-50" />
      </div>
    </div>
  );
}

export default Avatar;
