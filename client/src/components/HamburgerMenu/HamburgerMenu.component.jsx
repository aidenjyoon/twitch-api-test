import { Hamburger, SVGRect } from "./HamburgerMenu.styles";

import { MenuContext } from "../../context/menu.context";
import MenuItems from "../MenuItems/MenuItems.context";

const HamburgerMenu = () => {
  const { isMenuOpen } = useContext(MenuContext);

  const HamburgerHandler = (e) => {
    console.log("clicking hamburger");
  };

  return (
    <>
      <Hamburger
        id="navbar__hamburgerMenu"
        onClick={HamburgerHandler()}
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <svg className="hamburger" viewBox="0 0 100 100" width="40">
          <SVGRect $position="top" className="line top"></SVGRect>
          <SVGRect $position="middle" className="line middle"></SVGRect>
          <SVGRect $position="bottom" className="line bottom"></SVGRect>
        </svg>
      </Hamburger>
      {isMenuOpen && <MenuItems />}
    </>
  );
};

export default HamburgerMenu;
