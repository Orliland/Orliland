import HeroImage from "../assets/image-amy.webp";
import Button from "../components/Button";

const Hero = () => {
  // TODO: add tablet styles
  // TODO: add desktop styles
  return (
    <section className="flex flex-col items-center gap-10 px-4 lg:mt-12">
      <picture className="px-[18px]">
        <img src={HeroImage} alt="Amy photo" />
      </picture>
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-[26px] font-bold">
          I’m Amy, and I’d love to work on your next project
        </h2>
        <p className="text-base font-medium text-gray">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button className="secondary" />
      </div>
    </section>
  );
};

export default Hero;
