import {
  NavBarContainer,
  LogoContainer,
  MenuContainer,
  LoginButton,
  HamburgerIcon,
  SVGRect,
} from "./NavBar.styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const HamburgerHandler = (a) => {
  console.log(a);
};

const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContainer id="navbar__logoC">
        <Logo width={50} height={50} />
      </LogoContainer>
      <MenuContainer id="navbar__menuC">
        <LoginButton id="navbar__loginButton" as="span">
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
  );
};

export default NavBar;
