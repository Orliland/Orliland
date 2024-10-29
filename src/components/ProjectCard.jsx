const ProjectCard = ({ image, order, animation, setAnimation }) => {
  return (
    // order-1 order-2 order-3 order-4 order-5
    // TODO: fixing problem with dinamic classes
    <img
      className={`${animation && animation} block w-[72vw] max-w-[540px] rounded-[10px]`}
      onAnimationEnd={() => {
        setAnimation(false);
      }}
      style={{
        order: order + 1,
      }}
      src={image}
      alt={image}
    />
  );
};

export default ProjectCard;
