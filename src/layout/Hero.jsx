import HeroImage from "../assets/orlando.webp";
import Button from "../components/Button";

const Hero = () => {
  // TODO: add tablet styles
  // TODO: add desktop styles
  return (
    <section className="flex flex-col items-center gap-10 px-4 md:relative md:-left-11 md:grid md:grid-cols-2 md:flex-row md:justify-between md:p-0 lg:left-0 lg:mx-auto lg:mt-12 lg:w-9/12 lg:gap-[125px]">
      <picture className="px-[18px] md:p-0">
        <img src={HeroImage} alt="Orlando photo" className="rounded-full" />
      </picture>
      <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left lg:gap-8">
        <h2 className="text-[26px] font-bold md:text-[32px] lg:text-[40px]">
          Hi! I’m Orlando, and I’d love to bring your next project to life
        </h2>
        <p className="text-base font-medium text-gray md:text-[18px] lg:mt-[2px]">
          As a frontend developer, I love crafting attractive and functional web
          interfaces, paying attention to every detail to deliver unique user
          experiences.
        </p>
        <Button className="secondary" action="mailto:hello@orli.land">
          Contact me
        </Button>
      </div>
    </section>
  );
};

export default Hero;
