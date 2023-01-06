import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 20px;
  line-height: 1;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
const Button = (props) => {
  const {
    type = "button",
    className = "",
    onClick = () => {},
    children,
    ...rest
  } = props;
  return (
    <ButtonStyled className={className} onClick={onClick} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
