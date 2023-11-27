import { useCallback, useState } from "react";
import styled from "styled-components";
import "./App.css";
import hugGif from "./assets/gifs/hug-me.gif";
import mainGif from "./assets/gifs/peach-cat-love.gif";
import ButtonsContainer from "./components/ButtonsContainer";

const App = () => {
  const [src, setSrc] = useState(mainGif);
  const [swapped, setSwapped] = useState(false);
  const [header, setHeader] = useState("Do you want me in Korea in May?");

  const onYesClick = useCallback(() => {
    setSrc(hugGif);
    setSwapped(true);
    setHeader("♡ I'm coming then! ♡");
  }, []);

  return (
    <RootComponent>
      <TitleComponent>{header}</TitleComponent>
      <GifWrapper>
        <GifComponent swapped={swapped} src={src} alt="gif" />
      </GifWrapper>
      {!swapped && <ButtonsContainer onYesClick={onYesClick} />}
    </RootComponent>
  );
};

export default App;

const RootComponent = styled("div")({
  padding: "50px",
  height: "calc(100vh - 100px)",
  position: "relative",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const TitleComponent = styled("div")({
  color: "#f07a7e",
  fontSize: "20px",
  fontWeight: 500,
  textAlign: "center",
  whiteSpace: "nowrap",
  overflow: "visible",
});

const GifWrapper = styled("div")({
  width: "250px",
  height: "250px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginTop: "20px",
  marginBottom: "50px",
});

const GifComponent = styled("img")<{ swapped: boolean }>(({ swapped }) => ({
  width: "100%",
  marginTop: swapped ? -30 : 30,
}));
