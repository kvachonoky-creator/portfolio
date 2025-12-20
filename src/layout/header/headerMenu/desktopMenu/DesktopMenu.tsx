import React from "react";
import {Menu, menuTitleProps} from "../menu/Menu.tsx";
import {S} from "../HeaderMenu_Styles.ts"

export const DesktopMenu: React.FC<menuTitleProps> = ({menuItem}: menuTitleProps) => {
    return (
        <S.DesktopMenu>
            <Menu menuItem={menuItem}/>

        </S.DesktopMenu>
    );
};

