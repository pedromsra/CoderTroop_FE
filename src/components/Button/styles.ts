import styled from 'styled-components'

export const Container = styled('button')<{$outlined: boolean}>`
    width: 100%;
    min-height: 4.8rem;
    padding: 1.2rem 1rem;
    white-space: nowrap;

    background-color: ${({$outlined, theme}) => $outlined ? theme.COLORS.light_100 : theme.COLORS.mainLight_200};
    color: ${({$outlined, theme}) => $outlined ? theme.COLORS.mainLight_200 : theme.COLORS.light_100 };

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;
    
    border: 2px solid ${({theme}) => theme.COLORS.mainLight_200};
    
    font-family: ${({theme}) => theme.fonts.content};
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;

    &:disabled {
        opacity: 0.5;
        cursor: default;

        &:hover {
            filter: brightness(1)
        }
    }

`;