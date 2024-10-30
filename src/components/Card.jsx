const Card = ({ className, icon, children }) => {
  return (
    <div className={`flex flex-col rounded-lg p-6 ${className}`}>
      <img src={icon} alt="" className="ml-auto" />
      <span className="text-[24px] font-bold leading-[30px] text-white">
        {children}
      </span>
    </div>
  );
};

export default Card;
