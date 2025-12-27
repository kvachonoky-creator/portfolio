import styled from "styled-components";
import bottomBorder from "../../assets/img/bottomBorder.svg?url"

const Footer = styled.footer`
   
    padding-top: 24px;
    padding-bottom: 264px;

    position: relative;
    z-index: 1;

    &::after {
        position: absolute;
        content: "";
        background-image: url("${bottomBorder}");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 50vw;
        max-height: 400px;
        bottom: 0;
        z-index: -1;
    }
`

const Social = styled.div`
    display: flex;
    gap: 24px;

    a {
        transition: transform 0.2s;

        svg {
            fill: red;
        }
        
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
    z-index: 2;
`

export const S = {
    Footer,
    Social,
    Reserved,
}