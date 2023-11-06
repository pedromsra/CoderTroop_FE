import styled, { css } from "styled-components";

export const Container = styled('div')<{$title: boolean, $comment: boolean, $best: boolean, $header: boolean}>`
    width: 100%;
    height: 100%;

    position: relative;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    padding: 2rem 1.2rem;

    ${({$title}) => $title && css`
        padding: 8rem 1.6rem 1.6rem;
        align-items: start;
    `}

    ${({$header}) => $header && css`
        padding: 1.6rem;
        align-items: start;
    `}

    ${({$comment}) => $comment && css`
        padding: 2.4rem 1.6rem 1.6rem;
        font-size: 1.4rem;
        gap: 0;
    `}

    border-radius: .8rem;

    background-color: ${({theme}) => theme.COLORS.light_100};
    color: ${({theme}) => theme.COLORS.dark_100};

    > .material-symbols-outlined {
        color: ${({theme}) => theme.COLORS.mainLight_200};
        font-size: 8rem;
        
        ${({$title}) => $title && css`
            position: absolute;
            left: 2rem;
            top: -2.5rem;
            padding: 1rem;
            background-color: ${({theme}) => theme.COLORS.light_000};
            color: ${({theme}) => theme.COLORS.mainLight_100};
            border-radius: 50%;
        `}

        ${({$comment}) => $comment && css`
            position: absolute;
            top: -2rem;
            left: 80%;
            color: ${({theme}) => theme.COLORS.mainLight_200};
            font-size: 4rem;
        `}
    }

    ${({$title}) => $title && css`
        .title {
            font-size: 1.6rem;
            font-weight: 700;
            text-align: start;

            margin: .4rem 0 1.6rem;
        }
    `}

    ${({$best}) => $best && css`
        .best {
            font-size: 1rem;
            text-align: start;

            padding: .4rem .8rem;
            border-radius: 1rem;

            background-color: ${({theme}) => theme.COLORS.salmao_200};

            position: absolute;
            top: -.9rem;
            left: 1.5rem;
        }
    `}

    ${({$header}) => $header && css`
        .header {
            width: 100%;

            font-size: 2rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.mainLight_200};
            text-align: center;

            padding-bottom: .8rem;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: .8rem;
        }

        .borderTop {
            width: 16rem;
            height: 1rem;
            border-top: .5px solid ${({theme}) => theme.COLORS.mainLight_000};
        }
    `}

`;