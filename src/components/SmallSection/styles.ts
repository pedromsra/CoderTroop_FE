import styled, {css} from "styled-components";

export const Container = styled('section')<{$isActive: boolean}>`
    font-size: 1.4rem;

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        color: ${({ theme }) => theme.COLORS.mainLight_300};

    }
    
    h2 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .children {
        ${({$isActive}) => $isActive ? css`
            display: auto;
            `
        :
        css`
            display: none;
        `}
    }

    .material-symbols-outlined {
        font-size: 2rem;
    }
`;