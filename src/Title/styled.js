import styled from "styled-components";

export const TitleSection = styled.div`
    margin: 40% auto 8px;
    font-size: 22px;
    font-weight: 900;
    color: white;
    letter-spacing: 2px;
    display: grid;
    align-items: center;
    width: 350px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin: 20% auto 8px;
    }
`;

export const TitleText = styled.div`
    text-align: center;
    text-shadow: 0px 0px 13px rgba(0, 0, 0, 1);
`;

export const SettingsButton = styled.button`
    position: absolute;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    background-color: black;
    border-radius: 50%;
    height: 20px;
    padding: 0;
    margin-left: -70px;

    &:hover{
        transform: scale(1.2);
    }

    &:active{
        transform: scale(1.3);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: -55px;
        margin-left: 0px;
    }
`;

export const SettingsButtonImage = styled.img`
    height: 20px;
`;