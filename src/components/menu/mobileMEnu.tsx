import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";

type menuTitleProps = {
    menuItem: Array<string>
}

export const MobileMenu = ({menuItem}: menuTitleProps) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen = {false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen = {false}>
                <ul>
                    {menuItem.map((item, index) => (
                        <ListItem key={index}>
                            <Link href={`#${item}`}>{item}</Link>
                        </ListItem>
                    ))}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.nav`

    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: ${theme.colors.primaryBG};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
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

const ListItem = styled.li`

`

const Link = styled.a`
    font-family: Raleway;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
    color: #25282b;
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    //position: fixed;
    //top: 16px;
    //right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    //z-index: 9999;

    span {
        display: block;
        width: 18px;
        height: 2px;
        background-color: #25282b;
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(135, 28, 28, 0.9);
        `}

    }

    &::before {
        content: "";
        display: block;
        width: 18px;
        height: 2px;
        background-color: #25282b;
        position: fixed;
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
        position: fixed;
        transform: translateY(6px);
        z-index: 99999;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0);
        `}

    }
`