import { Main } from "./styled"
import { useState, useEffect } from "react";

const Container = ({ children, state, showInfo, Info }) => {
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
            ?  Info
            : children}
        </Main>
    );
};

export default Container;
