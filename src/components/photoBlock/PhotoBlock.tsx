import photo from "../../assets/img/photo.webp"
import {S} from "./PtohoBlock_Styles.ts"
import React from "react";

export const PhotoBlock: React.FC = () => {
    return (
            <S.PhotoBlock>
                <S.PhotoBackground/>

                <S.Photo src={photo} alt="My photo"/>
            </S.PhotoBlock>
    );
};

