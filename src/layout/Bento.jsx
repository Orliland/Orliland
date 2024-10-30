import Card from "../components/Card";

import AppsIcon from "../assets/pattern-apps.svg";
import GraphicDesignIcon from "../assets/pattern-graphic-design.svg";
import IllustrationsIcon from "../assets/pattern-illustrations.svg";
import MotionGraphicsIcon from "../assets/pattern-motion-graphics.svg";
import PhotographyIcon from "../assets/pattern-photography.svg";
import UiUxIcon from "../assets/pattern-ui-ux.svg";

const Bento = () => {
  return (
    <div className="grid grid-cols-2 items-start gap-6 md:grid-cols-4 lg:grid-cols-6 lg:grid-rows-2">
      <Card
        className="col-span-full gap-[94px] bg-purple md:col-span-2 md:row-span-2"
        icon={GraphicDesignIcon}
      >
        Graphic Design
      </Card>
      <Card
        className="col-span-1 gap-10 bg-orange md:row-span-1"
        icon={UiUxIcon}
      >
        UI/UX
      </Card>
      <Card className="col-span-1 gap-10 bg-pink md:row-span-1" icon={AppsIcon}>
        Apps
      </Card>
      <Card
        className="col-span-full gap-4 bg-red md:col-span-2 lg:order-4"
        icon={IllustrationsIcon}
      >
        Illustrations
      </Card>
      <Card
        className="col-span-full gap-10 bg-green md:col-span-2 lg:order-3"
        icon={PhotographyIcon}
      >
        Photography
      </Card>
      <Card
        className="col-span-full gap-10 bg-magenta md:col-span-2 lg:order-5 lg:gap-4"
        icon={MotionGraphicsIcon}
      >
        Motion Graphics
      </Card>
    </div>
  );
};

export default Bento;
