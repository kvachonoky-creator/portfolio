import {S} from "../HeaderMenu_Styles.ts"
import {Menu, menuTitleProps} from "../menu/Menu.tsx";
import React from "react";


export const MobileMenu: React.FC<menuTitleProps> = ({menuItem}: menuTitleProps) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItem={menuItem}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

