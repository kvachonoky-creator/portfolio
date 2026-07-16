import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const ListItem = styled.li`
`

const Link = styled.a<{$isActive: boolean}>`
    position: relative;
    font-family: Raleway, sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.colors.titleFont};

    &::after {
        position: absolute;
        right: 0;
        bottom: -8px;
        left: 0;
        height: 2px;
        content: "";
        background: ${theme.colors.signal};
        transform: scaleX(${({$isActive}) => $isActive ? 1 : 0});
        transform-origin: left;
        transition: transform 0.2s ease;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
`;

const CvLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 34px;
    padding: 0 10px;
    border: 1px solid ${theme.colors.line};
    border-radius: 4px;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 10px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.colors.accent};
    transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

    &:hover {
        border-color: ${theme.colors.accent};
        color: ${theme.colors.secondaryBG};
        background: ${theme.colors.accent};
    }
`;


// mobile menu

const MobileMenu = styled.nav`
    display: none;

    @media screen and (max-width: 767px) {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${theme.colors.menuBG};
    backdrop-filter: blur(18px);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: none;
    height: 100vh;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 44px;
    `}
    ul {
        display: flex;
        gap: 48px;
        flex-direction: column;
        align-items: center;
    }
    ${Link} {
        font-size: 22px;
    }

    ${CvLink} {
        min-height: 42px;
        padding: 0 16px;
        font-size: 13px;
    }
`;


const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: relative;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;


    span {
        display: block;
        width: 18px;
        height: 2px;
        background-color: ${theme.colors.titleFont};
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(135, 28, 28, 0);
        `}

    }

    &::before {
        content: "";
        display: block;
        width: 18px;
        height: 2px;
        background-color: ${theme.colors.titleFont};
        position: absolute;
        top: 19px;
        left: 11px;
        transform: translateY(-6px);
        z-index: 99999;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
        content: "";
        display: block;
        width: 18px;
        height: 2px;
        background-color: ${theme.colors.titleFont};
        position: absolute;
        top: 19px;
        left: 11px;
        transform: translateY(6px);
        z-index: 99999;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0);
        `}

    }
`;


// desktop menu

const DesktopMenu = styled.nav`
    display: flex;
    align-items: center;
    gap: 24px;

    @media screen and (max-width: 767px) {
        display: none;
    }

    ul {
        display: flex;
        gap: 36px;
    }
`;

export const S = {
    ListItem,
    Link,
    CvLink,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
}
