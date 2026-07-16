import React from "react";
import {Menu, MenuProps} from "../menu/Menu.tsx";
import {S} from "../HeaderMenu_Styles.ts"

export const DesktopMenu: React.FC<MenuProps> = ({menuItems, activeHref}) => {
    return (
        <S.DesktopMenu aria-label="Primary navigation">
            <Menu menuItems={menuItems} activeHref={activeHref}/>
            <S.CvLink
                href="/yaroslav-kvachonak-cv.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Open CV as PDF"
            >
                CV <span aria-hidden="true">↗</span>
            </S.CvLink>
        </S.DesktopMenu>
    );
};

