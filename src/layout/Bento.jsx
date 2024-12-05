import Card from "../components/Card";

import ReactIcon from "../assets/react.svg";
import NextIcon from "../assets/nextjs.png";
import TypescriptIcon from "../assets/typescript.svg";
import TailwindIcon from "../assets/tailwind.svg";
import NodeIcon from "../assets/node.svg";
import PythonIcon from "../assets/python.svg";

const Bento = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 lg:grid-rows-2">
      <Card
        className="bg-slate-900 col-span-full gap-[94px] md:col-span-2 md:row-span-2"
        icon={ReactIcon}
      >
        React JS
      </Card>
      <Card className="bg-next col-span-1 gap-10 md:row-span-1" icon={NextIcon}>
        Next .JS
      </Card>
      <Card
        className="bg-typescript col-span-1 gap-10 md:row-span-1"
        icon={TypescriptIcon}
      >
        Type Script
      </Card>
      <Card
        className="bg-node col-span-full gap-4 md:col-span-2 lg:order-4"
        icon={NodeIcon}
      >
        Node
      </Card>
      <Card
        className="bg-python col-span-full gap-10 md:col-span-2 lg:order-3"
        icon={PythonIcon}
      >
        Python & Flask
      </Card>
      <Card
        className="bg-slate-900 col-span-full gap-10 md:col-span-2 lg:order-5 lg:gap-4"
        icon={TailwindIcon}
      >
        TailwindCSS
      </Card>
    </div>
  );
};

export default Bento;
