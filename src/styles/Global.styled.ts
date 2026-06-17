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
        src: url('/fonts/Nunito-Regular.eot?') format("eot"),
        url('/fonts/Nunito-Regular.woff2') format("woff2"),
        url('/fonts/Nunito-Regular.ttf') format("truetype");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: Nunito;
        src: url('/fonts/Nunito-SemiBold.eot?') format("eot"),
        url('/fonts/Nunito-SemiBold.woff2') format("woff2"),
        url('/fonts/Nunito-SemiBold.ttf') format("truetype");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: Nunito;
        src: url('/fonts/Nunito-Bold.eot?') format("eot"),
        url('/fonts/Nunito-Bold.woff2') format("woff2"),
        url('/fonts/Nunito-Bold.ttf') format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: Roboto;
        src: url('/fonts/Roboto-Medium.eot?') format("eot"),
        url('/fonts/Roboto-Medium.woff2') format("woff2"),
        url('/fonts/Roboto-Medium.ttf') format("truetype");
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: Roboto;
        src: url('/fonts/Roboto-Bold.eot?') format("eot"),
        url('/fonts/Roboto-Bold.woff2') format("woff2"),
        url('/fonts/Roboto-Bold.ttf') format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: "Playfair Display";
        src: url('/fonts/PlayfairDisplay-Bold.eot?') format("eot"),
        url('/fonts/PlayfairDisplay-Bold.woff2') format("woff2"),
        url('/fonts/PlayfairDisplay-Bold.ttf') format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: Raleway;
        src: url('/fonts/Raleway-Medium.eot?') format("eot"),
        url('/fonts/Raleway-Medium.woff2') format("woff2"),
        url('/fonts/Raleway-Medium.ttf') format("truetype");
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: Comfortaa;
        src: url('/fonts/Comfortaa-Bold.eot?') format("eot"),
        url('/fonts/Comfortaa-Bold.woff2') format("woff2"),
        url('/fonts/Comfortaa-Bold.ttf') format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    body {
        min-width: 375px;
        font-family: Nunito, Roboto, "Playfair Display", Raleway, Comfortaa, serif;
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
