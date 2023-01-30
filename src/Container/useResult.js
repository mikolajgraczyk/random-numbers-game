import { useState, useEffect } from "react";

export const useResult = (mode) => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * (mode.generateTo - mode.generateFrom + 1) + mode.generateFrom));
    const [points, setPoints] = useState(+localStorage.getItem("points") || 0);
    const [state, setState] = useState({
        prevNumber: randomNumber,
        isStarted: false,
        isGuessed: null,
    });

    useEffect(() => {
        localStorage.setItem("points", points)

        if (points <= 0) {
            setPoints(0);
            return;
        }
    }, [points]);

    const generateNumber = () => {
        setRandomNumber(Math.floor(Math.random() * (mode.generateTo - mode.generateFrom + 1) + mode.generateFrom));
    };

    const compareNumbers = (value) => {
        setState({
            prevNumber: randomNumber,
            isStarted: true,
            isGuessed: false,
        });
        if (randomNumber === value) {
            setPoints(points + mode.collectPoint);
            setState({
                prevNumber: randomNumber,
                isGuessed: true,
                isStarted: true,
            });
            return;
        };
        setPoints(points - mode.losePoint);
    };

    return {
        points,
        state,
        randomNumber,
        setState,
        compareNumbers,
        generateNumber,
        setRandomNumber,
    };
};