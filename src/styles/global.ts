import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0%;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.secondary_200};
        color: ${({ theme }) => theme.COLORS.dark_100};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea{
        font-family: ${({theme}) => theme.fonts.content};
        font-size: 1.6rem;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }

`;