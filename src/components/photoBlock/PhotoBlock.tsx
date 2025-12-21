import photo from "../../assets/img/photo.webp"
import {S} from "./PtohoBlock_Styles.ts"
import React from "react";
// import Tilt from '@/index';
// import './ParallaxEffectImg.demozap.css';

export const PhotoBlock: React.FC = () => {
    return (
        <S.PhotoBlock>
            {/*<Tilt*/}
            {/*    className="parallax-effect-img"*/}
            {/*    tiltMaxAngleX={40}*/}
            {/*    tiltMaxAngleY={40}*/}
            {/*    perspective={800}*/}
            {/*    transitionSpeed={1500}*/}
            {/*    scale={1.1}*/}
            {/*    gyroscope={true}>*/}
                <S.PhotoBackground/>
                <S.Photo src={photo} alt="My photo"/>
            {/*</Tilt>*/}

        </S.PhotoBlock>
    );
};

