import { createGlobalStyle } from "styled-components";
import { text, background } from "./shared/Colors/colors";

export const GlobalStyle = createGlobalStyle`

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        width: 100%;
        height: 100vh;

        background: ${background};
        color: ${text}
        
    }

    html {
        font-size: 100%;
        
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }


    body, input, button, textarea { 
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        /* font-family: 'Rajdhani', sans-serif */
    }

    button {
        border: none;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`;
