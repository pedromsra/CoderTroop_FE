import styled from "styled-components";

export const Container = styled('div')`
    
    width: 100%;
    height: 100%;
    min-height: 100vh;

    display: grid;

    grid-template-areas:
    'header'
    'form'
    ;
    grid-template-rows: 11.3rem auto;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.secondary_300};

    overflow: hidden;
`;

export const Form = styled.div`

    display: flex;
    justify-content: center;
    align-content: flex-start;

    grid-area: form;
    .form {

        overflow: auto;

        width: 100%;
        max-width: 40rem;
        height: fit-content;
        padding: 6rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        align-items: center;
    
        background-color: ${({theme}) => theme.COLORS.secondary_200};
        border-radius: 1rem;
    }

    .signin {
        width: 100%;
        max-width: 40rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        margin-bottom: 2.8rem;

        .notRegistered {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            font-size: 1.5rem;
        }

        a {
            text-align: center;
            font-size: 1.5rem;
            color: ${({theme}) => theme.COLORS.main_200};
        }

    }
    
    .input, .button {
        max-width: 40rem;
    }

    .singinTitle {
        font-style: normal;
        font-weight: 600;
        font-size: clamp(2.4rem, 2rem + 2vw, 3rem);
    }

    label {
        padding-left: .5rem;
        padding-bottom: .8rem;
        display:inline-block;

        color: ${({theme}) => theme.COLORS.main_300};
        font-weight: 500;
    }

    div {
        width: 100%;
    }

    .forgot {
        font-size: 1.7rem;
        line-height: 1.6;

        a {
            color: ${({theme}) => theme.COLORS.main_200};
        }
    }

    a {
        width: 100%;
    }


`;