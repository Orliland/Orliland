import Button from "../components/Button";
import SocialLink from "../components/SocialLink";

import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import ThreadsIcon from "../assets/threads.svg";

const NavBar = ({ className = "header" }) => {
  return (
    <nav
      className={` ${className === "header" ? "sticky top-0 z-10 p-4 backdrop-blur-md md:px-10 md:py-[34px] lg:px-0" : ""} ${className === "footer" ? "px-4 pb-8 pt-10 md:px-10 md:py-14 lg:px-0 lg:pb-16 lg:pt-14" : ""} `}
    >
      <div className="flex items-center justify-between lg:mx-auto lg:w-9/12">
        <span className="cursor-default text-xl font-extrabold">
          Orlando Verd&iacute;n
        </span>
        <ul className="flex items-center gap-3">
          <li>
            <Button action="/Orlando_Verdin-Frontend_Developer.pdf">
              Download CV
            </Button>
          </li>
          <SocialLink
            link="https://github.com/Orliland"
            icon={GithubIcon}
            alt="Visit my GitHub profile"
          />
          <SocialLink
            link="https://linkedin.com/in/Orliland"
            icon={LinkedinIcon}
            alt="Visit my LinkedIn profile"
          />
          <SocialLink
            link="https://threads.net/Orliland"
            icon={ThreadsIcon}
            alt="Visit my Threads profile"
          />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
