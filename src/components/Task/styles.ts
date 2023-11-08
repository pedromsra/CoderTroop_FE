import styled from "styled-components";

export const Container = styled('div')<{$isHeader: boolean}>`
    width: 100%;
    min-height: 4.8rem;
    height: fit-content;
    
    display: flex;
    flex-direction: column;


    background-color: ${({theme}) => theme.COLORS.light_100};
    color: ${({theme}) => theme.COLORS.mainLight_200};

    .task {
        display: flex;
        flex-direction: row;
        align-items: center;

        button {
            width: fit-content;
            border: none;
        }

        .delete {
            color: ${({theme}) => theme.COLORS.salmao};
            margin: 0 1.5rem;
        }
    }
    
    .inputTask {
        width: 100%;
        padding: 0 0 0 1.5rem;
        p {
            font-size: 1rem;
        }
    }


    .priority {
            padding: 0.5rem 1.5rem 0.5rem 1.5rem;
            display: flex;
            flex-direction: row;
            gap: 1.5rem;
            justify-content: flex-end;
            align-items: center;

            label {
                display: flex;
                flex-direction: row;
                gap: .5rem;
                align-items: center;

                text-transform: capitalize;

                color: ${({theme}) => theme.COLORS.mainLight_200};
            }
        }

    .material-symbols-outlined {
        font-size: 2rem;
    }
`;

export const Input = styled('input')<{$done: boolean}>`
    width: 100%;
    

    
    background: transparent;
    border: 0;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;

    

    &::placeholder {
        color: ${({theme}) => theme.COLORS.mainLight_100};
    }

    &:enabled {
        border: 1px solid ${({theme}) => theme.COLORS.mainLight_100};
        color: ${({theme}) => theme.COLORS.mainLight_300};
    }

    &:disabled {
        text-decoration: ${({$done}) => $done ? 'line-through' : 'none'};
        color: ${({$done, theme}) => $done ? theme.COLORS.light_600 : theme.COLORS.light_700};
    }
`