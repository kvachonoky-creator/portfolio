import React from 'react';
import {S} from "../HeaderMenu_Styles.ts"
import type {NavigationItem} from "../../../../data/navigation.ts";

export type MenuProps = {
    menuItems: ReadonlyArray<NavigationItem>;
    onItemClick?: () => void;
}

export const Menu: React.FC<MenuProps> = ({menuItems, onItemClick}) => {
        return (
            <ul>
                {menuItems.map((item) => (
                    <S.ListItem key={item.href}>
                        <S.Link href={item.href} onClick={onItemClick}>{item.label}</S.Link>
                    </S.ListItem>
                ))}
            </ul>
        );
    }
;

