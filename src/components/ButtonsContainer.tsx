import { CSSProperties, useCallback, useState } from "react";
import styled from "styled-components";
import { NoButton, YesButton } from "./Button";

const defaultNoPosition: CSSProperties = {
  position: "absolute",
  top: "65%",
  left: "54%",
};

const yesPosition: CSSProperties = {
  position: "absolute",
  top: "65%",
  left: "22%",
};

interface ButtonsContainerProps {
  onYesClick: () => void;
}

const ButtonsContainer = ({ onYesClick }: ButtonsContainerProps) => {
  const [count, setCount] = useState(0);
  const [noPosition, setNoPosition] =
    useState<CSSProperties>(defaultNoPosition);

  const onNoClick = useCallback(() => {
    if (count < 15) {
      setCount((c) => c + 1);
      setNoPosition({
        position: "absolute",
        translate: "transform(-50%, -50%)",
        top: `${getRandomInt(5, 85)}%`,
        left: `${getRandomInt(5, 70)}%`,
      });
    } else {
      setNoPosition((oldPos) => ({
        ...oldPos,
        width: 0,
        height: 0,
        visibility: "hidden",
        transition: "all linear 50ms",
      }));
    }
  }, [count]);

  return (
    <ButtonsContainerComponent>
      <YesButton style={yesPosition} onClick={onYesClick}>
        Yes
      </YesButton>
      <NoButton style={noPosition} onClick={onNoClick}>
        No
      </NoButton>
    </ButtonsContainerComponent>
  );
};

export default ButtonsContainer;

const ButtonsContainerComponent = styled("div")({});

const getRandomInt = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
