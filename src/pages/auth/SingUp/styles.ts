import styled from "styled-components";

export const Container = styled.div`
    
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
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        align-items: center;
    
        background-color: ${({theme}) => theme.COLORS.secondary_200};
        border-radius: 1rem;

        margin-bottom: 1rem;

    }

    .signup {
        width: 100%;
        max-width: 40rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;


        .alreadyRegistered {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            font-size: 1.5rem;
        }

        a {
            font-size: 1.5rem;
            color: ${({theme}) => theme.COLORS.main_200};
        }

    }

    .input, .button {
        max-width: 40rem;
    }

    .signupTitle {
        font-style: normal;
        font-weight: 600;
        font-size: 3rem;
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


    .confirm {
        font-size: 1.7rem;
        line-height: 1.6;

        a {
            color: ${({theme}) => theme.COLORS.main_200};
        }
    }

`;