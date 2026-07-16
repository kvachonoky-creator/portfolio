import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Header = styled.header<{$isScrolled: boolean}>`
    padding: 14px 0;
    min-height: 72px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: ${({$isScrolled}) => $isScrolled ? theme.colors.headerBG : "transparent"};
    border-bottom: 1px solid ${({$isScrolled}) => $isScrolled ? theme.colors.line : "transparent"};
    backdrop-filter: ${({$isScrolled}) => $isScrolled ? "blur(18px)" : "none"};
    transition: background-color 0.2s ease, border-color 0.2s ease, backdrop-filter 0.2s ease;
`;

const LogoLink = styled.a`
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${theme.colors.titleFont};
`;

const LogoMark = styled.span`
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.04em;
    border: 1px solid ${theme.colors.finalLine};
    color: ${theme.colors.finalText};
    background: ${theme.colors.finalBG};
`;

const LogoName = styled.span`
    font-family: Raleway, sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.015em;

    @media screen and (max-width: 430px) {
        display: none;
    }
`;

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
`;

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
    Header,
    LogoLink,
    LogoMark,
    LogoName,
    HeaderActions,
    ThemeToggle,
    ThemeLabel,
};
