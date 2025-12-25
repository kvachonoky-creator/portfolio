import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import topBorder from "../../assets/img/topBorder.svg"
import topBorderBlack from "../../assets/img/topBorder-mask.svg?url"


const PhotoBlock = styled.div`
    top: -120px;
    position: absolute;
    right: max(-210px, calc(50% - 930px));
    max-width: 900px;
    width: 100%;
    min-height: 900px;
    height: 100%;
    z-index: 1;

    @media ${theme.media.tablet} {
        right: -50px;
        top: -100px;
    }

    @media ${theme.media.mobile} {
        right: 0;
        max-width: 600px; // сделать правильно
    }
`

const PhotoBackground = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("${topBorder}");
    background-repeat: no-repeat;
    z-index: -2;

`


const Photo = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    mask-image: url("${topBorderBlack}");
    mask-repeat: no-repeat;
    object-fit: cover;
    z-index: -1;

`

export const S = {
    PhotoBlock,
    PhotoBackground,
    Photo,
}