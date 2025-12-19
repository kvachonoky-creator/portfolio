import {Icons} from "../../components/icons/Icons.tsx";
import styled from "styled-components";
import {Container} from "../../components/container/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import bottomBorder from "../../assets/img/bottomBorder.svg?url"

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"} gap={"32px"}>
                    <StyledSocial>
                        <a href={"https://t.me/ya_yareekk"} target={"_blank"}><Icons iconId="tg" aria-label={"telegram"}
                                                                                     width="48px" height="48px"
                                                                                     viewBox="0 0 40 40"/></a>
                        <a href={"https://www.instagram.com/ya_yarek/?igsh=Y21oNWJuY28xbWhh#"} target={"_blank"}><Icons
                            iconId="inst" aria-label={"instagram"} width="48px" height="48px"
                            viewBox="0 0 48 48"/></a>
                        <a href={"https://www.linkedin.com/in/kyarek/"} target={"_blank"}><Icons iconId="linkedin"
                                                                                                 aria-label={"email"}
                                                                                                 width="48px"
                                                                                                 height="48px"
                                                                                                 viewBox="0 0  48 48"/></a>
                    </StyledSocial>
                    <StyledReserved>© 2025 Yaroslau Kvachonak, All Rights Reserved.</StyledReserved>
                </FlexWrapper>

            </Container>

        </StyledFooter>

    );
};


const StyledFooter = styled.footer`
    padding-bottom: 264px;

    position: relative;

    &::after {
        position: absolute;
        content: "";
        background-image: url("${bottomBorder}");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 100%;
        bottom: 0;
        z-index: -1;
    }
`

const StyledSocial = styled.div`
    display: flex;
    gap: 24px;

    a {
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.2);
        }
    }
`

const StyledReserved = styled.small`
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #828282;
`


