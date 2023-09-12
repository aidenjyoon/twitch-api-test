import {
  NavBarContainer,
  LogoContainer,
  MenuContainer,
  LoginButton,
} from "./NavBar.styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.component";

const loginClickHandler = () => {
  console.log("clicking login button");
};

const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <LogoContainer id="navbar__logoC">
          <Logo width={50} height={50} />
        </LogoContainer>
        <MenuContainer className="menu">
          <LoginButton
            to="/login"
            className="loginButton"
            onClick={loginClickHandler()}
          >
            Login
          </LoginButton>
          <HamburgerMenu />
        </MenuContainer>
      </NavBarContainer>

      <Outlet />
    </>
  );
};

export default NavBar;
