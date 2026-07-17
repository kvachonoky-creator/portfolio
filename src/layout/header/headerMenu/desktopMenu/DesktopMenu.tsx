import {Menu, MenuProps} from "../menu/Menu.tsx";
import {S} from "../HeaderMenu_Styles.ts"

export const DesktopMenu = ({menuItems, activeHref}: MenuProps) => {
    return (
        <S.DesktopMenu aria-label="Primary navigation">
            <Menu menuItems={menuItems} activeHref={activeHref}/>
        </S.DesktopMenu>
    );
};

