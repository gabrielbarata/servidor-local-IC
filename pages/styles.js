import styled, { css, keyframes } from "styled-components";
import { darken, rgba, lighten } from "polished";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(#aa5042, #61a0af);
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-auto-rows: 15rem;
  grid-gap: 3rem;
  padding: 3rem;
  overflow: hidden;
`;

const animation = (init, back = false) => {
  const a = (v) => {
    const c = back ? 100 : 0;
    v = back ? -v : v;
    return `${c + v}%`;
  };

  return keyframes`

  ${a(0)}{
    /* background-color: #305252; */
    transform: translateY(0rem) rotateY(${init}deg);
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.7), 0 0 0 rgba(0, 0, 0, 0.7);
  }

  ${a(10)}{
    transform: translateY(-1rem) rotateY(${init}deg);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.7), 0.5rem 1rem 1rem rgba(0, 0, 0, 0.7);
  }

  ${a(90)} {
    transform: translateY(-1rem) rotateY(${init - 180}deg);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.7), 0.5rem 1rem 1rem rgba(0, 0, 0, 0.7);
  }
  ${a(100)}{
    /* background-color: #8a7e84; */
    /* background-color: #8a7e29; */
    background-color: #8A7E4D;

    transform: translateY(0rem) rotateY(${init - 180}deg);
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.7), 0 0 0 rgba(0, 0, 0, 0.7);
  }

`;
};

const animation_mixin = (init) => css`
  &.in {
    animation: ${animation(init)} 1s ease forwards;
  }
  &.out {
    animation: ${animation(init, true)} 1s ease forwards;
  }
`;

export const White = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  height: 3px;
  background-color: ${rgba("#FFF", 0)};
  box-shadow: 0 0 0 0 ${rgba("#FFF", 0)};
  border-radius: 100%;
  z-index: 1;
  transition: all 1s ease;
`;

export const Ribbon = styled.div.attrs({ color: "#9C254D" })`
  ${({ color }) => css`
    position: absolute;
    right: -20px;
    top: 5%;
    transition: all 1s ease;

    .all {
      position: relative;
      color: #edb64b;
      text-shadow: 0 0 0.5rem black;
      height: 50px;
      line-height: 50px;
      padding-left: 15px;
      padding-top: 0px;
      padding-right: 10px;

      background-color: ${color};
      filter: drop-shadow(-0.55rem 0.65rem 0.3rem ${rgba("black", 0.7)});
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      z-index: 1;

      span {
        font-size: 2rem;
        text-align: end;
      }
      &:after {
        content: "";
        position: absolute;
        height: 0;
        width: 0;
        left: -20px;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
        border-right: 20px solid ${color};
      }
    }
    .ap {
      position: absolute;
      height: 19px;
      width: 19px;
      bottom: -19px;
      right: 1px;
      clip-path: polygon(0 0, 0 100%, 100% 0);
      background-color: ${darken(0.1, color)};
      z-index: 10;
    }
  `}
`;


export const Item = styled.a`
  position: relative;
  perspective: 40rem;

  &:hover {
    color: currentColor;
  }

  .mycard {
    background-color: transparent;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    backface-visibility: hidden;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.7), 0 0 0 rgba(0, 0, 0, 0.7);
  }

  .front {
    /* display: none; */
    ${animation_mixin(0)}
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    overflow: hidden;
    ${animation_mixin(180)}
  }

  &:hover ${White} {
    background-color: ${rgba("#FFF", 0.5)};
    box-shadow: 0 0 5rem 6.5rem ${rgba("#FFF", 0.5)};
  }
  &:hover img {
    opacity:0;
  }
  &:hover ${Ribbon} {
    transform: translateY(-3rem);
    opacity:0;
  }

  pre {
    font-size: 1.5rem;
    position: relative;
    white-space: normal;
    text-align: center;
    padding: 0.5rem 1rem;
    color: #201003;
    text-shadow: 0 0 0.15em #dcf2b0;
    font-weight: bold;
    z-index: 10;
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: all 1s ease;
  }
`;



// export const Ribbon = styled.div.attrs({ color: "#6d1a36" })`
//   ${({ color }) => css`
//     color: #c200fb;
//     height: 50px;
//     line-height: 50px;
//     padding-left: 15px;
//     padding-top: 0px;
//     padding-right: 10px;
//     position: absolute;
//     right: -20px;
//     top: 5%;
//     background-color: ${color};
//     /* filter: drop-shadow(-0rem 1rem 0.3rem rgba(0, 0, 0, 0.7)); */
//     border-top-right-radius: 2px;
//     border-bottom-right-radius: 2px;

//     span {
//       font-size: 2rem;
//       text-align: end;
//     }

//     &:before,
//     &:after {
//       content: "";
//       position: absolute;
//     }
//     &:before {
//       height: 0;
//       width: 0;
//       bottom: -20px;
//       right: -0px;
//       border-top: 20px solid ${darken(0.17, color)};
//       border-right: 20px solid transparent;
//     }
//     &:after {
//       height: 0;
//       width: 0;
//       left: -20px;
//       border-top: 25px solid transparent;
//       border-bottom: 25px solid transparent;
//       border-right: 20px solid ${color};
//     }
//   `}
// `;

// export const Ribbon = styled.div.attrs({ color: "#6d1a36" })`
//   ${({ color }) => css`
//   color: #c200fb;
//       height: 50px;
//       line-height: 50px;
//       position: absolute;
//       right: -20px;
//       top: 5%;
//     .all {
//       position: relative;
//       padding-left: 15px;
//       padding-top: 0px;
//       padding-right: 10px;
//       background-color: ${color};
//       filter: drop-shadow(-0rem 1rem 0.3rem rgba(0, 0, 0, 0.7));
//       border-top-right-radius: 2px;
//       border-bottom-right-radius: 2px;
//       z-index: 1;
//       span {
//         font-size: 2rem;
//         text-align: end;
//       }

//       /* &:before, */
//       &:after {
//         content: "";
//         position: absolute;
//       }
//       /* &:before {
//       height: 0;
//       width: 0;
//       bottom: -20px;
//       right: -0px;
//       border-top: 20px solid ${darken(0.17, color)};
//       border-right: 20px solid transparent;
//     } */
//       &:after {
//         height: 0;
//         width: 0;
//         left: -20px;
//         border-top: 28px solid transparent;
//         border-bottom: 28px solid transparent;
//         border-right: 20px solid ${color};
//       }
//     }
//     .trans {
//       position: absolute;
//         height: 0;
//         width: 0;
//         bottom: -0px;
//         right: -0px;
//         border-top: 20px solid transparent;
//         border-right: 20px solid transparent;
//         /* z-index: 2; */
//       .ap {
//         position: relative;
//         height: 0;
//         width: 0;
//         bottom: -0px;
//         right: -0px;
//         border-top: 20px solid ${darken(0.17, color)};
//         border-right: 20px solid transparent;
//         z-index: 100000000;
//       }
//     }
//   `}
// `;

// export const Ribbon5 = styled.div`
//   position: absolute;
//   top: 15px;
//   padding: 8px 10px;
//   background: #00b3ed;
//   box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.3);

//   &:before,
//   &:after {
//     content: "";
//     position: absolute;
//   }
//   &:before {
//     width: 7px;
//     height: 100%;
//     top: 0;
//     left: -6.5px;
//     padding: 0 0 7px;
//     background: inherit;
//     border-radius: 5px 0 0 5px;
//     background-color: red;
//     &:before {
//       content: "";
//       position: absolute;
//       width: 7px;
//       height: 150%;
//       top: 0;
//       left: -6.5px;
//       background-color: green;
//     }
//   }
//   &:after {
//     width: 5px;
//     height: 5px;
//     bottom: -5px;
//     left: -4.5px;
//     background-color: lightblue;
//     border-radius: 5px 0 0 5px;
//   }
// `;

// export const Ribbon3 = styled.div`
//   min-width: 100px;
//   height: 50px;
//   line-height: 50px;
//   padding-left: 15px;
//   padding-top: 0px;
//   padding-right: 10px;
//   position: absolute;
//   left: -20px;
//   top: 70%;
//   background-color: maroon;

//   span {
//     font-size: 2rem;
//   }

//   &:before,
//   &:after {
//     content: "";
//     position: absolute;
//   }
//   &:before {
//     height: 0;
//     width: 0;
//     top: -20px;
//     left: -2px;
//     border-bottom: 20px solid black;
//     border-left: 20px solid transparent;
//   }
//   &:after {
//     height: 0;
//     width: 0;
//     right: -14.5px;
//     border-top: 25px solid transparent;
//     border-bottom: 25px solid transparent;
//     border-left: 15px solid maroon;
//   }
// `;
