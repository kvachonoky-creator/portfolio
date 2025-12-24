import { createGlobalStyle } from "styled-components";
import {theme} from "./Theme.ts"

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    @font-face {
        font-family: Nunito;
        src: url('../assets/fonts/Nunito-Regular.eot?') format("eot"),
        url('../assets/fonts/Nunito-Regular.woff2') format("woff2"),
        url('../assets/fonts/Nunito-Regular.ttf') format("truetype");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: Nunito;
        src: url('../assets/fonts/Nunito-SemiBold.eot?') format("eot"),
        url('../assets/fonts/Nunito-SemiBold.woff2') format("woff2"),
        url('../assets/fonts/Nunito-SemiBold.ttf') format("truetype");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: Nunito;
        src: url('../assets/fonts/Nunito-Bold.eot?') format("eot"),
        url('../assets/fonts/Nunito-Bold.woff2') format("woff2"),
        url('../assets/fonts/Nunito-Bold.ttf') format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: Roboto;
        src: url('../assets/fonts/Roboto-Medium.eot?') format("eot"),
        url('../assets/fonts/Roboto-Medium.woff2') format("woff2"),
        url('../assets/fonts/Roboto-Medium.ttf') format("truetype");
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: Roboto;
        src: url('../assets/fonts/Roboto-Bold.eot?') format("eot"),
        url('../assets/fonts/Roboto-Bold.woff2') format("woff2"),
        url('../assets/fonts/Roboto-Bold.ttf') format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: "Playfair Display";
        src: url('../assets/fonts/PlayfairDisplay-Bold.eot?') format("eot"),
        url('../assets/fonts/PlayfairDisplay-Bold.woff2') format("woff2"),
        url('../assets/fonts/PlayfairDisplay-Bold.ttf') format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: Raleway;
        src: url('../assets/fonts/Raleway-Medium.eot?') format("eot"),
        url('../assets/fonts/Raleway-Medium.woff2') format("woff2"),
        url('../assets/fonts/Raleway-Medium.ttf') format("truetype");
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: Comfortaa;
        src: url('../assets/fonts/Comfortaa-Bold.eot?') format("eot"),
        url('../assets/fonts/Comfortaa-Bold.woff2') format("woff2"),
        url('../assets/fonts/Comfortaa-Bold.ttf') format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    body {
        min-width: 375px;
        font-family: Nunito, Roboto, PlayfairDisplay, Raleway, Comfortaa, sans-serif;
        background: ${theme.colors.primaryBG};
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }



`