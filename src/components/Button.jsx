import React from "react";
import styled, { css, keyframes } from "styled-components";

const rotateAnimation = keyframes`
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotatez(360deg);
    }
`;

const StyledButton = styled.button.attrs(props => ({
    outlined: true,
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover{
    animation: ${rotateAnimation} 2s infinite linear;
  }
  align-self: ${({ alight }) => alight || "stretched"};

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || "white"};
      background: ${(props) => props.background || "white"};
    `}

  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || "white"};
      border: 1px solid ${(props) => props.color || "white"};
      background: transparent;
    `}
`;

const LargeButton = styled(StyledButton)`
  font-size: 32px;
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
