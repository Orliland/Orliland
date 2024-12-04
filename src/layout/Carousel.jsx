import { useState } from "react";
import { ButtonRounded } from "../components/Button";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { id: 1, thumbnail: "/images/image-slide-1.jpg" },
  { id: 2, thumbnail: "/images/image-slide-2.jpg" },
  { id: 3, thumbnail: "/images/image-slide-3.jpg" },
  { id: 4, thumbnail: "/images/image-slide-4.jpg" },
  { id: 5, thumbnail: "/images/image-slide-5.jpg" },
];

const Carousel = () => {
  const [order, setOrder] = useState(
    Array.from({ length: projects.length }, (v, i) => i),
  );
  const middleElement = Math.ceil(projects.length / 2) - 1;
  const [animation, setAnimation] = useState(false);

  const handleCarousel = (action) => {
    switch (action) {
      case "previous": {
        const newOrder = [
          ...order.slice(1, order.length),
          ...order.slice(0, 1),
        ];
        setAnimation("animate-fade-in-right");
        setOrder(newOrder);

        break;
      }
      case "next": {
        const newOrder = [
          ...order.slice(order.length - 1),

          ...order.slice(0, order.length - 1),
        ];

        setAnimation("animate-fade-in-left");
        setOrder(newOrder);
        break;
      }
    }
  };

  return (
    <section className="mt-10 flex flex-col items-center gap-6 overflow-hidden md:gap-10">
      <h2 className="flex items-center gap-5 py-4 text-2xl font-bold">
        My Work
      </h2>

      {/* TODO: add documentation to a better understanding of the code down */}
      <div
        className="grid grid-rows-1 items-start gap-[15px]"
        style={{
          width: `calc((${projects.length} * 72vw) + ((${projects.length} - 1) * 15px))`,
          gridTemplateColumns: `repeat(${projects.length}, auto)`,
          maxWidth: `calc((${projects.length} * 450px) + ((${projects.length} - 1) * 15px))`,
        }}
      >
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.id}
              image={project.thumbnail}
              order={order[index]}
              animation={animation}
              setAnimation={setAnimation}
              middleElement={middleElement}
            />
          );
        })}
      </div>
      <div className="flex gap-4">
        <ButtonRounded
          type="left"
          onClick={() => {
            handleCarousel("previous");
          }}
        />
        <ButtonRounded
          type="right"
          onClick={() => {
            handleCarousel("next");
          }}
        />
      </div>
    </section>
  );
};

export default Carousel;
