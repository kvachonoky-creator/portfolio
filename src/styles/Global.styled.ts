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
        --color-primary-bg: ${({theme: activeTheme}) => activeTheme.colors.primaryBG};
        --color-secondary-bg: ${({theme: activeTheme}) => activeTheme.colors.secondaryBG};
        --color-accent: ${({theme: activeTheme}) => activeTheme.colors.accent};
        --color-signal: ${({theme: activeTheme}) => activeTheme.colors.signal};
        --color-title-font: ${({theme: activeTheme}) => activeTheme.colors.titleFont};
        --color-text-font: ${({theme: activeTheme}) => activeTheme.colors.textFont};
        --color-line: ${({theme: activeTheme}) => activeTheme.colors.line};
        --color-frame: ${({theme: activeTheme}) => activeTheme.colors.frame};
        --color-header-bg: ${({theme: activeTheme}) => activeTheme.colors.headerBG};
        --color-menu-bg: ${({theme: activeTheme}) => activeTheme.colors.menuBG};
        --color-grid-base: ${({theme: activeTheme}) => activeTheme.colors.gridBase};
        --color-grid-active: ${({theme: activeTheme}) => activeTheme.colors.gridActive};
        --color-accent-soft: ${({theme: activeTheme}) => activeTheme.colors.accentSoft};
        --color-signal-soft: ${({theme: activeTheme}) => activeTheme.colors.signalSoft};
        --color-image-bg: ${({theme: activeTheme}) => activeTheme.colors.imageBG};
        --color-card-shadow: ${({theme: activeTheme}) => activeTheme.colors.cardShadow};
        --color-final-bg: ${({theme: activeTheme}) => activeTheme.colors.finalBG};
        --color-final-surface: ${({theme: activeTheme}) => activeTheme.colors.finalSurface};
        --color-final-line: ${({theme: activeTheme}) => activeTheme.colors.finalLine};
        --color-final-text: ${({theme: activeTheme}) => activeTheme.colors.finalText};
        --color-final-muted: ${({theme: activeTheme}) => activeTheme.colors.finalMuted};
        --color-hud-bg: ${({theme: activeTheme}) => activeTheme.colors.hudBG};
        --color-hud-border: ${({theme: activeTheme}) => activeTheme.colors.hudBorder};
        --color-hud-keyword: ${({theme: activeTheme}) => activeTheme.colors.hudKeyword};
        --color-hud-type: ${({theme: activeTheme}) => activeTheme.colors.hudType};
        --color-hud-string: ${({theme: activeTheme}) => activeTheme.colors.hudString};
        --glow-x: 50vw;
        --glow-y: 40vh;
        --glow-opacity: 0;
        scroll-behavior: smooth;
        background: ${theme.colors.primaryBG};
        transition: background-color 0.24s ease, color 0.24s ease;
    }

    body {
        position: relative;
        min-width: 320px;
        overflow-x: hidden;
        font-family: Nunito, Arial, sans-serif;
        line-height: 1.5;
        color: ${theme.colors.titleFont};
        background: ${theme.colors.primaryBG};
        background-image:
            linear-gradient(${theme.colors.gridBase} 1px, transparent 1px),
            linear-gradient(90deg, ${theme.colors.gridBase} 1px, transparent 1px);
        background-size: 32px 32px;
    }

    body::after {
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        content: "";
        opacity: var(--glow-opacity);
        background-image:
            linear-gradient(${theme.colors.gridActive} 1px, transparent 1px),
            linear-gradient(90deg, ${theme.colors.gridActive} 1px, transparent 1px);
        background-size: 32px 32px;
        -webkit-mask-image: radial-gradient(circle 260px at var(--glow-x) var(--glow-y), #000 0%, transparent 100%);
        mask-image: radial-gradient(circle 260px at var(--glow-x) var(--glow-y), #000 0%, transparent 100%);
        transition: opacity 0.25s ease;
    }

    #root {
        position: relative;
        z-index: 1;
    }

    header,
    section,
    footer,
    article,
    form {
        transition: color 0.24s ease, background-color 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
    }

    @media (hover: none) {
        body::after {
            display: none;
        }
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button,
    input,
    textarea {
        font: inherit;
    }

    ::selection {
        color: ${theme.colors.secondaryBG};
        background: ${theme.colors.accent};
    }

    ul {
        list-style: none;
    }

    section {
        scroll-margin-top: 88px;
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
