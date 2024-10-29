export default function Button({ className = "default" }) {
  return (
    // TODO: add styles for tablet and desktop
    <button
      className={`rounded-full px-7 py-2 text-sm font-bold text-light-cream md:px-[45px] md:py-[14px] md:text-base ${className === "default" ? "bg-black hover:bg-purple" : ""} ${className === "secondary" ? "bg-red hover:bg-orange" : ""}`}
    >
      Free Consultation
    </button>
  );
}

import LeftArrow from "../assets/icon-arrow-left.svg";
import RightArrow from "../assets/icon-arrow-right.svg";

export const ButtonRounded = ({ type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="grid h-16 w-16 place-items-center rounded-full bg-black hover:bg-purple"
    >
      <img
        className="h-4 w-auto"
        src={type === "left" ? LeftArrow : RightArrow}
        alt={type === "left" ? "Previous project" : "Next project"}
      />
    </button>
  );
};
