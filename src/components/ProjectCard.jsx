import Button from "./Button";

const ProjectCard = ({
  image,
  order,
  animation,
  setAnimation,
  middleElement,
}) => {
  return (
    // order-1 order-2 order-3 order-4 order-5
    // TODO: fixing problem with dinamic classes

    <div
      className={`${animation && animation} w-[72vw] max-w-[450px] rounded-[10px]`}
      style={{ order: order + 1 }}
      onAnimationEnd={() => {
        setAnimation(false);
      }}
    >
      <img
        src={image}
        alt={image} // TODO: change image for project title
        className="z-10 w-full rounded-t-[10px]"
      />

      <div className="relative">
        <div
          className={`${middleElement != order && "hidden"} ${animation && "animate-fade-body relative"} z-[-1] rounded-b-[10px] bg-white p-5 shadow-xl`}
        >
          <h3 className="text-lg font-bold">
            Project Title {middleElement} {order}
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim culpa
            earum beatae non ducimus fugiat. Obcaecati, voluptatibus iste neque
            esse laboriosam recusandae consectetur saepe ex consequatur iure
            dolor at eveniet?
          </p>
          <div className="flex justify-center gap-4">
            <Button action="#">Code</Button>
            <Button action="#">Live view</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
