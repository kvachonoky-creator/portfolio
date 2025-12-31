import {S} from "../HeaderMenu_Styles.ts"
import {Menu, menuTitleProps} from "../menu/Menu.tsx";
import React, {useState} from "react";


export const MobileMenu: React.FC<menuTitleProps> = ({menuItem}: menuTitleProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)



    return (
        <S.MobileMenu>
            <S.BurgerButton  onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={isOpen}>
                <Menu menuItem={menuItem}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

