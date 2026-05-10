import React from 'react';
import {S} from "../HeaderMenu_Styles.ts"

export type menuTitleProps = {
    menuItem: Array<string>
}


export const Menu: React.FC<menuTitleProps> = ({menuItem}: menuTitleProps
    ) => {
        return (
            <ul>
                {menuItem.map((item, index) => (
                    <S.ListItem key={index}>
                        <S.Link href={`#${item}`}>{item}</S.Link>
                    </S.ListItem>
                ))}
            </ul>
        );
    }
;

