import styled from "styled-components";

export const Container = styled("button")`
    width: 100%;
    background: none;

    font-family: ${({theme}) => theme.fonts.content};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    
    color: ${({theme}) => theme.COLORS.main_100};

    border: none;
    font-size: 1.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;

    &:disabled {
        opacity: 0.5;
        cursor: default;

        &:hover {
            filter: brightness(1)
        }
    }
`;