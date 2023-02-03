import { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Points from "./Points";
import Result from "./Result";
import Title from "./Title";
import Settings from "./Settings";
import { useResult } from "./useResult";

const App = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode")) || {
    generateFrom: 1,
    generateTo: 5,
    collectPoint: 5,
    losePoint: 1,
  });

  const {
    points,
    state,
    randomNumber,
    setState,
    compareNumbers,
    generateNumber,
    setRandomNumber,
  } = useResult(mode);

  return (
    <>
      <Title
        title={`Odgadnij numerek od ${mode.generateFrom} do ${mode.generateTo}`}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
      />
      <Container
        state={state}
        showInfo={showInfo}
        Info={
          <Settings
            setMode={setMode}
            mode={mode}
            setState={setState}
            setRandomNumber={setRandomNumber}
            randomNumber={randomNumber}
          />}
      >
        <Form
          generateNumber={generateNumber}
          compareNumbers={compareNumbers}
          mode={mode}
        />
        <Points points={points} />
        <Result state={state} />
      </Container>
    </>
  );
}

export default App;
