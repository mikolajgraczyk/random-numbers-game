import { TitleSection, TitleText, Info, InfoImage } from "./styled";
import info from "./info.png";

const Title = ({ title, setShowInfo, showInfo }) => {

    return (
        <TitleSection>
            <TitleText>{title}</TitleText>
            <Info
                onClick={() => {
                    {showInfo === false ? setShowInfo(true) : setShowInfo(false)};
                }}
            >
                <InfoImage src={info} alt={"Informacja"}/>
            </Info>
        </TitleSection>
    );
};

export default Title;