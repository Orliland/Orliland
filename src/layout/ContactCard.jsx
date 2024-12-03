import Button from "../components/Button";

const ContactCard = () => {
  return (
    <section className="mx-4 flex flex-col items-center gap-6 rounded-[10px] bg-black px-6 py-12 md:mx-10 md:gap-[26px] md:px-[75px] md:pb-16 md:pt-14 lg:mx-auto lg:w-9/12 lg:flex-row lg:justify-between lg:p-20">
      <div className="flex flex-col gap-6 text-center text-light-cream md:gap-[26px] lg:max-w-[540px] lg:text-left">
        <h2 className="text-[26px] font-bold md:text-[32px] lg:text-[40px]">
          Get in Touch
        </h2>
        <p className="font-medium md:text-lg">
          I’m always excited to collaborate on impactful projects and bring
          ideas to life through elegant code and design. If you’re looking for a
          passionate frontend developer to join your team, let’s connect!
        </p>
      </div>
      <Button className="secondary" action="mailto:hello@orli.land">
        Email Me
      </Button>
    </section>
  );
};

export default ContactCard;
