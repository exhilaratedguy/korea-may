import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const YesButton = ({ children, ...props }: ButtonProps) => {
  return <YesButtonComponent {...props}>{children}</YesButtonComponent>;
};

export const NoButton = ({ children, ...props }: ButtonProps) => {
  return <NoButtonComponent {...props}>{children}</NoButtonComponent>;
};

const YesButtonComponent = styled("button")({
  all: "unset",
  fontSize: 18,
  height: 30,
  width: 90,
  border: "2px solid #f07a7e",
  color: "#f07a7e",
  borderRadius: "15px",
  textAlign: "center",
});

const NoButtonComponent = styled(YesButtonComponent)({
  backgroundColor: "#f07a7e",
  color: "white",

  transition: "all linear 70ms",
});
