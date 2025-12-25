import styled from "styled-components";
import bottomBorder from "../../assets/img/bottomBorder.svg?url"
import {theme} from "../../styles/Theme.ts";

const Footer = styled.footer`
   
    padding-top: 24px;
    padding-bottom: 264px;
    background-color: ${theme.colors.primaryBG};

    position: relative;
    z-index: 1;

    &::after {
        position: absolute;
        content: "";
        background-image: url("${bottomBorder}");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 100%;
        bottom: 0;
        z-index: 0;
    }
`

const Social = styled.div`
    display: flex;
    gap: 24px;

    a {
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.2);
        }
    }
`

const Reserved = styled.small`
    font-family: "Nunito", serif;
    font-weight: 400;
    font-size: 16px;
    color: #828282;
    position: relative;
    z-index: 3;
`

export const S = {
    Footer,
    Social,
    Reserved,
}