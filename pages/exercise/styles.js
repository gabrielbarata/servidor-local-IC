import styled, { css, keyframes } from "styled-components";
import { darken, rgba, lighten } from "polished";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(#aa5042, #61a0af);
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
  }

  p {
    font-size: 48px;
  }

  img {
    width: 512px;
    height: 424px;
    background-color: #000000;
  }
`;
