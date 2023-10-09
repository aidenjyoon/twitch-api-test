import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  background: white;
  z-index: 100;
  border: 3px solid;

  top: 56px;
  bottom: 0;
  left: 0;
  right: 0;

  // height: 100%;
  // width: 100%;
  // margin: auto;
  // padding: 10px;
  // transform: translate(-10%, 55%);

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 2rem;

    li {
      padding: 10px;
    }
  }
`;
