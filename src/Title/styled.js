import styled from "styled-components";

export const TitleSection = styled.div`
    margin: 40% auto 8px;
    font-size: 22px;
    font-weight: 900;
    color: white;
    letter-spacing: 2px;
    display: grid;
    max-width: 500px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin: 20% auto 8px;
    }
`;

export const TitleText = styled.div`
    text-align: center;
    text-shadow: 0px 0px 13px rgba(0, 0, 0, 1);
`;

export const Info = styled.button`
    position: absolute;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    background-color: black;
    border-radius: 50%;
    height: 25px;
    padding: 0;

    &:hover{
        transform: scale(1.2);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: -30px;
    }
`;

export const InfoImage = styled.img`
    height: 25px;
`;