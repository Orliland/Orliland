const Card = ({ className, icon, children }) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-lg p-6 ${className}`}
    >
      <img
        src={icon}
        alt=""
        className={`ml-auto w-full ${children != "React JS" && "max-w-20"} ${children != "TailwindCSS" && "fill-white"} ${children == "TypeScript" && "shadow-2xl"}`}
      />
      <span className="text-[24px] font-bold leading-[30px] text-white">
        {children}
      </span>
    </div>
  );
};

export default Card;
