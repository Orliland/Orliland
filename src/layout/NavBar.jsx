import Logo from "../assets/logo.svg";

import Button from "../components/Button";

const NavBar = ({ className }) => {
  return (
    <nav
      className={`
        ${className === "header" && "sticky top-0 backdrop-blur-sm bg-light-cream/60 p-4 md:py-[34px] md:px-10 lg:px-0"}
        ${className === 'footer' && 'px-4 pt-10 pb-8 md:px-10 md:py-14 lg:px-0 lg:pt-14 lg:pb-16'}
        `}
    >
      <div className="flex justify-between lg:w-9/12 lg:mx-auto ">
        <img src={Logo} alt="logo" className="w-12 h-12" />

        <Button />
      </div>
    </nav>
  );
};

export default NavBar;
