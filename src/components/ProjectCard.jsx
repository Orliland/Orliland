import Button from "./Button";

const ProjectCard = ({
  data,
  order,
  animation,
  setAnimation,
  middleElement,
}) => {
  return (
    // order-1 order-2 order-3 order-4 order-5
    // TODO: fixing problem with dinamic classes

    <div
      className={`${animation && animation} w-[72vw] max-w-[450px] overflow-hidden rounded-[10px] shadow-xl`}
      style={{ order: order + 1 }}
      onAnimationEnd={() => {
        setAnimation(false);
      }}
    >
      <img
        src={data.thumbnail}
        alt={data.title} // TODO: change image for project title
        className="z-10 w-full rounded-t-[10px]"
      />

      <div
        className={`${middleElement != order && "hidden"} z-[-1] rounded-b-[10px] bg-white p-5`}
      >
        <h3 className="text-lg font-bold">{data.title}</h3>
        <p className="my-3">{data.description}</p>
        <div className="flex justify-center gap-4">
          <Button action={data.repository}>Code</Button>
          <Button action={data.live}>Live view</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
