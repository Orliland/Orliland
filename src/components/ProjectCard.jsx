const ProjectCard = ({ image, order }) => {
  return (
    // order-1 order-2 order-3 order-4 order-5
    // TODO: fixing problem with dinamic classes
    <img
      className={`block w-[72vw] max-w-[540px] rounded-[10px]`}
      style={{
        order: order + 1,
      }}
      src={image}
      alt={image}
    />
  );
};

export default ProjectCard;
