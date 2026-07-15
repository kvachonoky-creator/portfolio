import photo from "../../assets/img/photo.webp"
import {S} from "./PhotoBlock_Styles.ts"
import React from "react";

export const PhotoBlock: React.FC = () => {
    return (
            <S.PhotoBlock>
                <S.PhotoBackground/>
                <S.PhotoMask>
                    <S.Photo
                        src={photo}
                        alt="Yaroslau Kvachonak"
                        width={1391}
                        height={1907}
                        decoding="async"
                        fetchPriority="high"
                    />
                </S.PhotoMask>
            </S.PhotoBlock>
    );
};

