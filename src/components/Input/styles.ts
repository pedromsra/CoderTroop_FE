import styled from "styled-components";

export const Container = styled('div')<{$isHeader: boolean}>`
    width: 100%;
    min-height: 4.8rem;
    height: fit-content;
    
    display: flex;
    align-items: center;

    padding: 1rem;

    background-color: ${({theme}) => theme.COLORS.light_100};
    color: ${({theme}) => theme.COLORS.mainLight_200};

    > input {
        width: 100%;
        padding: 0 0 0 1rem;

        color: ${({theme}) => theme.COLORS.mainLight_300};
        background: transparent;
        border: 0;

        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.mainLight_100};
        }

    }
    .material-symbols-outlined {
        font-size: 2rem;
    }
`;