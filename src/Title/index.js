import { TitleSection, TitleText, SettingsButton, SettingsButtonImage } from "./styled";
import settings from "./settings.png";

const Title = ({ title, setShowInfo, showInfo }) => {

    return (
        <TitleSection>
            <TitleText>{title}</TitleText>
            <SettingsButton
                onClick={() => {
                    {showInfo === false ? setShowInfo(true) : setShowInfo(false)};
                }}
            >
                <SettingsButtonImage src={settings} alt={"Ustawienia"}/>
            </SettingsButton>
        </TitleSection>
    );
};

export default Title;