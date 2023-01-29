import styled from "styled-components";

export const FormSection = styled.form`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 10px;
    width: 100%;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: auto;
    }
`;

export const Input = styled.input`
    padding: 8px;
    border-radius: 4px;
    max-width: 100px;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        max-width: none;
    }
`;

export const Button = styled.button`
    padding: 8px;
    border: none;
    background-color: teal;
    color: white;
    border-radius: 4px;
    font-size: 20px;
    letter-spacing: 4px;
`;