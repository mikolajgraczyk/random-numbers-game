import { GeneratedNumber, GeneratedNumberSection } from "./styled";

const Result = ({ state }) => (
    <GeneratedNumberSection>
        {state.isStarted && <GeneratedNumber>Wylosowano: {state.prevNumber}</GeneratedNumber>}
    </GeneratedNumberSection>
);

export default Result;