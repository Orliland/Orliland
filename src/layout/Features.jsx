import Bento from "./Bento";

const Features = () => {
  return (
    <section className="mx-auto mt-4 flex flex-col gap-8 px-4 md:mt-[30px] md:gap-16 md:px-[39px] lg:mt-8 lg:w-9/12 lg:gap-20 lg:px-0">
      <div className="mx-auto flex max-w-[752px] flex-col gap-4 text-center md:gap-[27px] lg:gap-[23px]">
        <h1 className="text-[36px] font-bold md:text-[44px] lg:text-[56px]">
          Design solutions made easy
        </h1>
        <p className="max-w-[730px] px-[29px] text-base font-medium text-gray md:text-lg">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
      <Bento />
    </section>
  );
};

export default Features;
