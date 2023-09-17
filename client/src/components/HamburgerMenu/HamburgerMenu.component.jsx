import { Hamburger, SVGRect } from "./HamburgerMenu.styles";

import { MenuContext } from "../../context/menu.context";

import { useContext } from "react";

const HamburgerMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const HamburgerHandler = () => {
    // toggle menu
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <>
      <Hamburger
        id="navbar__hamburgerContainer"
        onClick={HamburgerHandler}
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <svg className="hamburger" viewBox="0 0 100 100" width="40">
          <SVGRect $position="top" className="line top" />
          <SVGRect $position="middle" className="line middle" />
          <SVGRect $position="bottom" className="line bottom" />
        </svg>
      </Hamburger>
    </>
  );
};

export default HamburgerMenu;
