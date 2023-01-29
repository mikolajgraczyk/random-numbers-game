import styled from "styled-components";

export const InfoSection = styled.div`
    color: white;
    max-width: 460px;
    height: 194px;
    text-align: center;
    font-size: 30px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 318px;
        height: 363px;
    }
`;