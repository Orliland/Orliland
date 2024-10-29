const Button = ({ className = "default" }) => {
  return (
    // TODO: add styles for tablet and desktop
    <button
      className={`rounded-full px-7 py-2 text-sm font-bold text-light-cream ${className === "default" ? "bg-black hover:bg-purple" : ""} ${className === "secondary" ? "bg-red hover:bg-orange" : ""}`}
    >
      Free Consultation
    </button>
  );
};

export default Button;
