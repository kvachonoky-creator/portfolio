import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import topBorder from "../../assets/img/topBorder.svg";
import topBorderMask from "../../assets/img/topBorder-mask.svg?url";

const PhotoBlock = styled.div`
    position: absolute;
    top: 0;
    right: -120px;
    z-index: 1;
    width: 720px;
    height: 629px;

    @media ${theme.media.projectStack} {
        position: relative;
        order: -1;
        top: auto;
        right: auto;
        align-self: center;
        width: calc(65.84vw + 128.1px);
        height: calc(41.22vw + 258.4px);
    }

    @media screen and (max-width: 375px) {
        align-self: flex-start;
        width: 100vw;
        height: 110.13vw;
        margin-inline: -15px;
    }
`;

const PhotoBackground = styled.div`
    position: absolute;
    top: -248px;
    left: 0;
    z-index: -2;
    width: 778px;
    height: 878px;
    background: url("${topBorder}") no-repeat top left / 778px 878px;

    @media ${theme.media.projectStack} {
        top: calc(-21.18vw - 57.6px);
        width: calc(55.73vw + 277px);
        height: calc(62.6vw + 315.3px);
        background-size: 100% 100%;
    }

    @media screen and (max-width: 375px) {
        top: -36.53vw;
        width: 129.6vw;
        height: 146.67vw;
        background-size: 100% 100%;
    }
`;

const PhotoMask = styled.div`
    position: absolute;
    top: -248px;
    left: 0;
    z-index: -1;
    width: 778px;
    height: 878px;
    mask: url("${topBorderMask}") no-repeat center / 100% 100%;

    @media ${theme.media.projectStack} {
        top: calc(-21.18vw - 57.6px);
        width: calc(55.73vw + 277px);
        height: calc(62.6vw + 315.3px);
    }

    @media screen and (max-width: 375px) {
        top: -36.53vw;
        width: 129.6vw;
        height: 146.67vw;
    }
`;

const Photo = styled.img`
    position: absolute;
    top: 278px;
    left: 76px;
    width: 612px;
    height: auto;
    max-width: none;

    @media ${theme.media.projectStack} {
        top: calc(62.6vw - 284.8px);
        left: calc(19.08vw - 95.6px);
        width: calc(7.63vw + 543.4px);
    }

    @media screen and (max-width: 375px) {
        top: -13.33vw;
        left: -6.4vw;
        width: 152.53vw;
    }
`;

export const S = {PhotoBlock, PhotoBackground, PhotoMask, Photo};
