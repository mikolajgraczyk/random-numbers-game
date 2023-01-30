import { useEffect } from "react";
import { InfoSection, Modes, ModeButton, SettingsSection } from "./styled";
import { useMode } from "./useMode";

const Settings = ({ setMode, mode, setState, setRandomNumber, randomNumber }) => {

    const {
        generatefromOneToTwo,
        generatefromOneToFive,
        generatefromOneToTen,
    } = useMode(setMode, setState, setRandomNumber, randomNumber);

    useEffect(() => {
        localStorage.setItem("mode", JSON.stringify(mode));
    }, [mode]);

    return (
        <SettingsSection>
            <Modes>
                <ModeButton
                    onClick={generatefromOneToTwo}>
                    tryb  1
                </ModeButton>
                <ModeButton
                    onClick={generatefromOneToFive}>
                    tryb  2
                </ModeButton>
                <ModeButton
                    onClick={generatefromOneToTen}>
                    tryb  3
                </ModeButton>
            </Modes>
            <InfoSection>
                Jeżeli odgadniesz jaką cyfrę wylosował komputer otrzymasz {mode.collectPoint}pkt. Jeżeli nie odgadniesz stracisz {mode.losePoint}pkt.
            </InfoSection>
        </SettingsSection>
    );
};

export default Settings;