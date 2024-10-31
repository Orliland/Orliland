import HeroImage from "../assets/image-amy.webp";
import Button from "../components/Button";

const Hero = () => {
  // TODO: add tablet styles
  // TODO: add desktop styles
  return (
    <section className="flex flex-col items-center gap-10 px-4 md:relative md:-left-11 md:grid md:grid-cols-2 md:flex-row md:justify-between md:p-0 lg:left-0 lg:mx-auto lg:mt-12 lg:w-9/12 lg:gap-[125px]">
      <picture className="px-[18px] md:p-0">
        <img src={HeroImage} alt="Amy photo" />
      </picture>
      <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left lg:gap-8">
        <h2 className="text-[26px] font-bold md:text-[32px] lg:text-[40px]">
          I’m Amy, and I’d love to work on your next project
        </h2>
        <p className="text-base font-medium text-gray md:text-[18px] lg:mt-[2px]">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button className="secondary" action="mailto:hello@orli.land">
          Contact me
        </Button>
      </div>
    </section>
  );
};

export default Hero;
