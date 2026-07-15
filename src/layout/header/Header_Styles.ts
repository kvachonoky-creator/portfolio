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
    background-color: ${({$isScrolled}) => $isScrolled ? "rgba(233, 238, 246, 0.88)" : "transparent"};
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
    color: #fff;
    background: ${theme.colors.dark};
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

export const S = {
    Header,
    LogoLink,
    LogoMark,
    LogoName,
};
