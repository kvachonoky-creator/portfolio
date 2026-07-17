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

const CvLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 40px;
    padding: 0 11px;
    border: 1px solid ${theme.colors.line};
    border-radius: 4px;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 10px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.colors.accent};
    background: ${theme.colors.secondaryBG};
    transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;

    &:hover {
        border-color: ${theme.colors.accent};
        color: ${theme.colors.secondaryBG};
        background: ${theme.colors.accent};
        transform: translateY(-1px);
    }
`;

export const S = {
    Header,
    LogoLink,
    LogoMark,
    LogoName,
    HeaderActions,
    CvLink,
};
