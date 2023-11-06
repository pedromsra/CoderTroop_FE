import styled from "styled-components";

export const Container = styled("button")<{$isActive: boolean}>`
    width: auto;

    padding: .2rem 1.2rem;

    font-family: ${({theme}) => theme.fonts.content};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    
    background-color: ${({theme, $isActive}) => $isActive ? theme.COLORS.mainLight_200 : theme.COLORS.mainLight_100};
    color: ${({theme, $isActive}) => $isActive ? theme.COLORS.light_100 : theme.COLORS.light_200};
    border: 1px solid ${({theme, $isActive}) => $isActive ? theme.COLORS.mainLight_100 : theme.COLORS.mainLight_200};

    border-radius: 1.5rem;
    
    text-transform: uppercase;

    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
`;