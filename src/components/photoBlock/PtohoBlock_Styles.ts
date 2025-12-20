import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import topBorder from "../../assets/img/topBorder.svg"
import topBorderBlack from "../../assets/img/topBorder-mask.svg?url"


const PhotoBlock = styled.div`
    position: absolute;
    right: max(0px, calc((100vw - 1440px)/2));
    max-width: 720px;
    width: 100%;
    height: 629px;
    z-index: -1;
    
    @media ${theme.media.tablet} {
        top: -100px;
    }
`

const PhotoBackground = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:  url("${topBorder}");
    background-repeat: no-repeat;
    background-size: 105% 105%;
    background-position: 2.5% 2.5%;
    z-index: -2;
    
`


const Photo = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    mask-image: url("${topBorderBlack}");
    mask-size: 105% 105%;
    object-fit: cover;
    z-index: -1;

`

export const S = {
    PhotoBlock,
    PhotoBackground,
    Photo,
}