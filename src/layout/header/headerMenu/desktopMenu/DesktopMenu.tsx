import React from "react";
import {Menu, MenuProps} from "../menu/Menu.tsx";
import {S} from "../HeaderMenu_Styles.ts"

export const DesktopMenu: React.FC<MenuProps> = ({menuItems}) => {
    return (
        <S.DesktopMenu aria-label="Primary navigation">
            <Menu menuItems={menuItems}/>

        </S.DesktopMenu>
    );
};

