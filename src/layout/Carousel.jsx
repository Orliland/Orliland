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

  const handleCarousel = (action) => {
    switch (action) {
      case "previous": {
        const newOrder = [
          ...order.slice(1, order.length),
          ...order.slice(0, 1),
        ];
        setOrder(newOrder);

        break;
      }
      case "next": {
        const newOrder = [
          ...order.slice(order.length - 1),

          ...order.slice(0, order.length - 1),
        ];
        setOrder(newOrder);
        break;
      }
    }
  };

  return (
    <section className="flex flex-col items-center gap-8 overflow-hidden md:gap-14">
      <h2 className="text-2xl font-bold">My Work</h2>
      <div
        className="grid grid-rows-1 gap-[15px]"
        style={{
          width: `calc((${projects.length} * 72vw) + ((${projects.length} - 1) * 15px))`,
          gridTemplateColumns: `repeat(${projects.length}, auto)`,
          maxWidth: `calc((${projects.length} * 540px) + ((${projects.length} - 1) * 15px))`,
        }}
      >
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.id}
              image={project.thumbnail}
              order={order[index]}
            />
          );
        })}
      </div>
      <div className="flex gap-4">
        <ButtonRounded type="left" onClick={() => handleCarousel("previous")} />
        <ButtonRounded type="right" onClick={() => handleCarousel("next")} />
      </div>
    </section>
  );
};

export default Carousel;
