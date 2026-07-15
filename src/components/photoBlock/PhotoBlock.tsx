import photo from "../../assets/img/photo.webp"
import {S} from "./PhotoBlock_Styles.ts"
import React from "react";

export const PhotoBlock: React.FC = () => {
    return (
        <S.PhotoBlock>
            <S.ViewportBar>
                <S.WindowControls aria-hidden="true"><i/><i/><i/></S.WindowControls>
                <span>portrait.tsx</span>
                <S.LiveLabel>live viewport</S.LiveLabel>
            </S.ViewportBar>
            <S.PhotoCanvas>
                <S.PhotoGrid aria-hidden="true"/>
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
                <S.AxisLabel $side="top">y</S.AxisLabel>
                <S.AxisLabel $side="left">x</S.AxisLabel>
            </S.PhotoCanvas>
            <S.Breakpoints aria-label="Responsive viewport breakpoints">
                <span>320</span><span>768</span><span>1440</span>
            </S.Breakpoints>
        </S.PhotoBlock>
    );
};

