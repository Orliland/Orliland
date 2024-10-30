import Logo from "../assets/logo.svg";

import Button from "../components/Button";

const NavBar = ({ className = "header" }) => {
  return (
    <nav
      className={` ${className === "header" ? "sticky top-0 z-10 p-4 backdrop-blur-md md:px-10 md:py-[34px] lg:px-0" : ""} ${className === "footer" ? "px-4 pb-8 pt-10 md:px-10 md:py-14 lg:px-0 lg:pb-16 lg:pt-14" : ""} `}
    >
      <div className="flex items-center justify-between lg:mx-auto lg:w-9/12">
        <span className="text-xl font-extrabold">Orlando Verd&iacute;n</span>

        <Button />
      </div>
    </nav>
  );
};

export default NavBar;
