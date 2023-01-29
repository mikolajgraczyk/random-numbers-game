import { useState, useEffect } from "react";

export const useResult = () => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 5 + 1));
    const [points, setPoints] = useState(+localStorage.getItem("points") || 0);
    const [state, setState] = useState({
        prevNumber: randomNumber,
        isStarted: false,
        isGuessed: null,
    });

    useEffect(() => {
        localStorage.setItem("points", points)
    }, [points]);

    const generateNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 5 + 1));
    };

    const compareNumbers = (value) => {
        setState({
            prevNumber: randomNumber,
            isStarted: true,
            isGuessed: false,
        });
        if (randomNumber === value) {
            setPoints(points + 5);
            setState({
                prevNumber: randomNumber,
                isGuessed: true,
                isStarted: true,
            });
            return;
        };
        if(points > 0) {
            setPoints(points - 1);
            return;
        }
    };

    return {
        points,
        state,
        generateNumber,
        compareNumbers,
    };
};