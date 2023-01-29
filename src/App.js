import { useState } from "react";
import Container from "./Container";
import Form from "./Container/Form";
import Points from "./Container/Points";
import Result from "./Container/Result";
import Title from "./Title";
import { useResult } from "./Container/useResult";

const App = () => {
  const [showInfo, setShowInfo] = useState(false);

  const {
    points,
    state,
    generateNumber,
    compareNumbers,
  } = useResult();

  return (
    <>
      <Title
        title={"Odgadnij numerek od 1 do 5"}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
      />
      <Container
        state={state}
        showInfo={showInfo}>
        <Form
          generateNumber={generateNumber}
          compareNumbers={compareNumbers}
        />
        <Points points={points} />
        <Result state={state} />
      </Container>
    </>
  );
}

export default App;
