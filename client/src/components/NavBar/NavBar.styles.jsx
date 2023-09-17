import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  height: 56px;
  // height: 500px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// split navbar into 3 parts
export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  background-color: transparent;
`;

export const NavLinksContainer = styled.div`
  margin: 12px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center; // not working
`;

export const DefaultNavLinks = styled(Link)`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LoginButton = styled(DefaultNavLinks)`
  margin: 10px;
`;
