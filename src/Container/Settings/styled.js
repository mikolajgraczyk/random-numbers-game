import styled from "styled-components";

export const SettingsSection = styled.div`
    display: grid;
`;

export const Modes = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;

export const ModeButton = styled.button`
    background: teal;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px;
    width: 120px;

    &:hover{
        cursor: pointer;
        background: ${({theme}) => theme.color.brightTeal};
    }

    &:active{
        background: ${({theme}) => theme.color.darkTeal};
    }
`;

export const InfoSection = styled.div`
    color: white;
    max-width: 460px;
    padding: 20px;
    text-align: center;
    font-size: 27px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 318px;
        height: 228px;
        padding: 0;
    }
`;