import React from 'react';
import {S} from "../HeaderMenu_Styles.ts"
import type {NavigationItem} from "../../../../data/navigation.ts";

export type MenuProps = {
    menuItems: ReadonlyArray<NavigationItem>;
    onItemClick?: () => void;
    activeHref?: string;
}

export const Menu: React.FC<MenuProps> = ({menuItems, onItemClick, activeHref}) => {
        return (
            <ul>
                {menuItems.map((item) => (
                    <S.ListItem key={item.href}>
                        <S.Link
                            href={item.href}
                            onClick={onItemClick}
                            $isActive={activeHref === item.href}
                            aria-current={activeHref === item.href ? "location" : undefined}
                        >
                            {item.label}
                        </S.Link>
                    </S.ListItem>
                ))}
            </ul>
        );
    }
;

