import { createGlobalStyle } from "styled-components";
import {theme} from "./Theme.ts"
export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    @font-face {
        font-family: Nunito;
        src: url('/fonts/Nunito-Regular.woff2') format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Nunito;
        src: url('/fonts/Nunito-SemiBold.woff2') format("woff2");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Nunito;
        src: url('/fonts/Nunito-Bold.woff2') format("woff2");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Roboto;
        src: url('/fonts/Roboto-Medium.woff2') format("woff2");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Roboto;
        src: url('/fonts/Roboto-Bold.woff2') format("woff2");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Playfair Display";
        src: url('/fonts/PlayfairDisplay-Bold.woff2') format("woff2");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Raleway;
        src: url('/fonts/Raleway-Medium.woff2') format("woff2");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Comfortaa;
        src: url('/fonts/Comfortaa-Bold.woff2') format("woff2");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    body {
        min-width: 320px;
        overflow-x: hidden;
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

    section {
        scroll-margin-top: 72px;
    }

    :focus-visible {
        outline: 3px solid ${theme.colors.accent};
        outline-offset: 4px;
    }

    @media (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }



`
