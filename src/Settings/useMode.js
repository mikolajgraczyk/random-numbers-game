export const useMode = (setMode, setState, setRandomNumber, randomNumber) => {
    const generatefromOneToTwo = () => {
        setMode({
            generateFrom: 1,
            generateTo: 2,
            collectPoint: 2,
            losePoint: 5,
        });
        setRandomNumber(Math.floor(Math.random() * (2 - 1 + 1) + 1));
        setState({
            prevNumber: randomNumber,
            isStarted: false,
            isGuessed: null,
        });
    }

    const generatefromOneToFive = () => {
        setMode({
            generateFrom: 1,
            generateTo: 5,
            collectPoint: 5,
            losePoint: 1,
        });
        setRandomNumber(Math.floor(Math.random() * (5 - 1 + 1) + 1));
        setState({
            prevNumber: randomNumber,
            isStarted: false,
            isGuessed: null,
        });
    }

    const generatefromOneToTen = () => {
        setMode({
            generateFrom: 1,
            generateTo: 10,
            collectPoint: 10,
            losePoint: 0.5,
        });
        setRandomNumber(Math.floor(Math.random() * (10 - 1 + 1) + 1));
        setState({
            prevNumber: randomNumber,
            isStarted: false,
            isGuessed: null,
        });
    }

    return {
        generatefromOneToTwo,
        generatefromOneToFive,
        generatefromOneToTen,
    };
};