import Logo from "../assets/logo.svg";

import Button from "../components/Button";

const NavBar = () => {
  return (
    <nav className="flex justify-between p-4">
      <img src={Logo} alt="logo" className="w-12 h-12" />

      <Button />
    </nav>
  );
};

export default NavBar;
