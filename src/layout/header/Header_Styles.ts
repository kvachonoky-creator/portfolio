import styled from "styled-components";

const Header = styled.header`
    padding: 12px 0;
    min-height: 56px;


    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`

const LogoLink = styled.a`
    display: flex;
    align-items: center;
`

export const S = {
    Header,
    LogoLink,
}