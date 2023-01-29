import styled, { css } from "styled-components";

export const Main = styled.div`
    border-radius: 4px;
    background: ${({ theme }) => theme.color.prussianBlue};
    max-width: 500px;
    display: grid;
    grid-gap: 8px;
    justify-items: center;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 30px 9px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 30px 9px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 30px 9px rgba(0, 0, 0, 1);
    transition: 0.2s;

    ${({ guessed }) => guessed && css`
        background: ${({ theme }) => theme.color.camarone};
    `};

    ${({ failed }) => failed && css`
        background: ${({ theme }) => theme.color.rosewood};
    `};

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-gap: 64px;
        padding: 10px;
    }
`;