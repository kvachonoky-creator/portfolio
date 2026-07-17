import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const ThemeToggle = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-width: 124px;
    height: 40px;
    padding: 0 13px;
    border: 1px solid ${theme.colors.line};
    border-radius: 4px;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 10px;
    letter-spacing: 0.04em;
    color: ${theme.colors.titleFont};
    background: ${theme.colors.secondaryBG};
    cursor: pointer;
    transition: color 0.24s ease, background-color 0.24s ease, border-color 0.24s ease, transform 0.2s ease;

    svg {
        flex: 0 0 16px;
        width: 16px;
        height: 16px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.7;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    &:hover {
        border-color: ${theme.colors.accent};
        color: ${theme.colors.accent};
        transform: translateY(-1px);
    }

    @media screen and (max-width: 1020px) {
        min-width: 40px;
        width: 40px;
        padding: 0;
    }
`;

const ThemeLabel = styled.span`
    @media screen and (max-width: 1020px) {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
        clip-path: inset(50%);
    }
`;

export const S = {
    ThemeToggle,
    ThemeLabel,
};
