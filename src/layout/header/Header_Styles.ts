import styled from "styled-components";

const Header = styled.header<{$isScrolled: boolean}>`
    padding: 12px 0;
    min-height: 56px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: ${({$isScrolled}) => $isScrolled ? "rgba(249, 250, 255, 0.85)" : "transparent"};
    border-bottom: 1px solid ${({$isScrolled}) => $isScrolled ? "rgba(37, 40, 43, 0.08)" : "transparent"};
    backdrop-filter: ${({$isScrolled}) => $isScrolled ? "blur(12px)" : "none"};
    transition: background-color 0.2s ease, border-color 0.2s ease, backdrop-filter 0.2s ease;
`

const LogoLink = styled.a`
    display: flex;
    align-items: center;
    color: #25282b;
    font-family: Comfortaa, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
`

export const S = {
    Header,
    LogoLink,
}
