import {Icons} from "../../components/icons/Icons.tsx";
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledSocial>
                <a><Icons iconId="tg" aria-label={"telegram"} width="48px" height="48px" viewBox="0 0 24 24"/></a>
                <a> <Icons iconId="inst" aria-label={"instagram"} width="48px" height="48px" viewBox="0 0 48 48"/></a>
                <a> <Icons iconId="mail" aria-label={"email"} width="48px" height="48px" viewBox="0 0  48 48"/></a>
            </StyledSocial>
            <StyledReserved>© 2025 Yaroslau Kvachonak, All Rights Reserved.</StyledReserved>
        </StyledFooter>

    );
};


const StyledFooter = styled.footer`
`

const StyledSocial = styled.div`
    display: flex;
    gap: 24px;
`

const StyledReserved = styled.small`
`


