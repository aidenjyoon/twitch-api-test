import styled from "styled-components";

export const Hamburger = styled.div`
  display: flex;

  .hamburger {
    .line {
      transition: y 100ms ease-in 100ms, rotate 100ms ease-in, opacity 0ms 100ms;
      transform-origin: center;
    }

    &:hover .line {
      transition: y 100ms ease-in, rotate 100ms ease-in 100ms, opacity 0ms 100ms;
    }
  }

  // when hovered create crisscross
  &:hover {
    :is(.top, .bottom) {
      y: 45px;
    }

    .top {
      rotate: 45deg;
    }

    .bottom {
      rotate: -45deg;
    }

    .middle {
      opacity: 0;
    }
  }

  &[aria-expanded="true"] .top {
  }
`;

// set the width, height, x, and border-radius (rx) as attribute
// each bar has differnt height based on className.
export const SVGRect = styled.rect.attrs((props) => ({
  width: "80",
  height: "10",
  x: "10",
  rx: "5",
  // y: (() => {
  //   switch (props.$position) {
  //     case "top":
  //       return 25;
  //     case "middle":
  //       return 45;
  //     case "bottom":
  //       return 65;
  //     default:
  //       return 0;
  //   }
  // })(),
}))`
  // width: 80px;
  // height: 10px;
  // x: 10px;
  // rx: 5px;

  // y val
  ${(props) => {
    switch (props.$position) {
      case "top":
        return "y: 25;";
      case "middle":
        return "y: 45;";
      case "bottom":
        return "y: 65;";
      default:
        return "y: 0;";
    }
  }};
`;
