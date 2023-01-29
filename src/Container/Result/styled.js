import styled from "styled-components";

export const GeneratedNumberSection = styled.div`
    display: grid;
    justify-items: center;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
       margin-bottom: 9px;
    }
`;

export const GeneratedNumber = styled.div`
    font-weight: 100;
    color: white;
    position: absolute;
`;