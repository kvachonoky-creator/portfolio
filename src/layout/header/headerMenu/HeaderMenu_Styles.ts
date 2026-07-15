import styled, {css} from "styled-components";

const ListItem = styled.li`
`

const Link = styled.a`
    font-family: Raleway;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
    color: #25282b;
`


// mobile menu

const MobileMenu = styled.nav`
    display: none;

    @media screen and (max-width: 767px) {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: rgba(249, 250, 255, 0.96);
    backdrop-filter: blur(10px);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: none;
    height: 100vh;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 48px;
        flex-direction: column;
        align-items: center;
    }
`


const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: relative;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;


    span {
        display: block;
        width: 18px;
        height: 2px;
        background-color: #25282b;
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(135, 28, 28, 0);
        `}

    }

    &::before {
        content: "";
        display: block;
        width: 18px;
        height: 2px;
        background-color: #25282b;
        position: absolute;
        top: 13px;
        left: 5px;
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
        background-color: #25282b;
        position: absolute;
        top: 13px;
        left: 5px;
        transform: translateY(6px);
        z-index: 99999;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0);
        `}

    }
`


// desktop menu

const DesktopMenu = styled.nav`
    @media screen and (max-width: 767px) {
        display: none;
    }

    ul {
        display: flex;
        gap: 48px;
    }
`

export const S = {
    ListItem,
    Link,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
}
