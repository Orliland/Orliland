import Card from "../components/Card";

import AppsIcon from "../assets/pattern-apps.svg";
import GraphicDesignIcon from "../assets/pattern-graphic-design.svg";
import IllustrationsIcon from "../assets/pattern-illustrations.svg";
import MotionGraphicsIcon from "../assets/pattern-motion-graphics.svg";
import PhotographyIcon from "../assets/pattern-photography.svg";
import UiUxIcon from "../assets/pattern-ui-ux.svg";

const Bento = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Card
        className="col-span-full gap-[94px] bg-purple"
        icon={GraphicDesignIcon}
      >
        Graphic Design
      </Card>
      <Card className="col-span-1 gap-10 bg-orange" icon={UiUxIcon}>
        UI/UX
      </Card>
      <Card className="col-span-1 gap-10 bg-pink" icon={AppsIcon}>
        Apps
      </Card>
      <Card className="col-span-full gap-4 bg-red" icon={IllustrationsIcon}>
        Illustrations
      </Card>
      <Card className="col-span-full gap-10 bg-green" icon={PhotographyIcon}>
        Photography
      </Card>
      <Card
        className="col-span-full gap-10 bg-magenta"
        icon={MotionGraphicsIcon}
      >
        Motion Graphics
      </Card>
    </div>
  );
};

export default Bento;
