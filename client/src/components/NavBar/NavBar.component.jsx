import {
  NavBarContainer,
  LogoContainer,
  NavLinksContainer,
  LoginButton,
} from "./NavBar.styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.component";

import { useContext } from "react";
import { MenuContext } from "../../context/menu.context";
import MenuItems from "../MenuItems/MenuItems.component";

const loginClickHandler = () => {
  console.log("clicking login button");
};

const NavBar = () => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <>
      <NavBarContainer>
        <LogoContainer id="navbar__logoC">
          <Logo width={50} height={50} />
        </LogoContainer>
        <NavLinksContainer className="menu">
          <LoginButton
            to="/login"
            className="loginButton"
            onClick={loginClickHandler()}
          >
            Login
          </LoginButton>
          <HamburgerMenu />
          {isMenuOpen && <MenuItems />}
        </NavLinksContainer>
      </NavBarContainer>

      <Outlet />
    </>
  );
};

export default NavBar;
