import {
  NavBarContainer,
  LogoContainer,
  MenuContainer,
  LoginButton,
  HamburgerIcon,
  SVGRect,
} from "./NavBar.styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Outlet } from "react-router-dom";

const HamburgerHandler = (a) => {
  console.log(a);
};

const loginClickHandler = () => {};

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
            as="span"
            onClick={loginClickHandler()}
          >
            Login
          </LoginButton>
          <HamburgerIcon
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
          </HamburgerIcon>
        </MenuContainer>
      </NavBarContainer>

      <Outlet />
    </>
  );
};

export default NavBar;
