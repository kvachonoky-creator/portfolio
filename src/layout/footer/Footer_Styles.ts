import styled from "styled-components";
import bottomBorder from "../../assets/img/bottomBorder.svg?url";
import {theme} from "../../styles/Theme.ts";

const Footer = styled.footer`
    position: relative;
    z-index: 1;
    padding-top: 56px;
    padding-bottom: 264px;
    overflow: hidden;
    background: ${theme.colors.primaryBG};

    &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 344px;
        content: "";
        background: url("${bottomBorder}") no-repeat center bottom / 100% 100%;
    }

    @media ${theme.media.mobile} {
        padding-bottom: 177px;

        &::after {
            height: 98px;
        }
    }
`;

const Social = styled.div`
    display: flex;
    gap: 24px;

    a {
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

const Reserved = styled.small`
    position: relative;
    z-index: 2;
    font-family: "Nunito", serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: ${theme.colors.textFont};
`;

export const S = {Footer, Social, Reserved};
