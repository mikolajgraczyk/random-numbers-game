import { PointsSection, PointsAmount, SectionTitle } from "./styled";

const Result = ({ points }) => (
    <PointsSection>
        <SectionTitle>punkty</SectionTitle>
        <PointsAmount>{points}</PointsAmount>
    </PointsSection>
);
export default Result;