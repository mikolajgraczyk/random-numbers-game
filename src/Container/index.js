import { Main, InfoSection } from "./styled"
import { useState, useEffect } from "react";

const Container = ({ children, state, showInfo }) => {
    const [isGuessed, setIsGuessed] = useState();

    useEffect(() => {
        switch (state.isGuessed) {
            case true:
                setIsGuessed(true);
                break;
            case false:
                setIsGuessed(false);
                break;
            default:
                setIsGuessed(null);
        }

        setTimeout(() => {
            setIsGuessed(null);
        }, 250);

    }, [state]);

    return (
        <Main
            guessed={isGuessed}
            failed={isGuessed === false}
        >
            {showInfo 
            ? <InfoSection>Jeżeli odgadniesz jaką cyfrę wylosował komputer otrzymasz 5pkt. Jeżeli nie odgadniesz stracisz 1pkt.</InfoSection> 
            : children}
        </Main>
    );
};

export default Container;
