import {Icons} from "../../components/icons/Icons.tsx";
import {Container} from "../../components/container/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {S} from "./Footer_Styles.ts"
import React from "react";
import {Fade} from "react-awesome-reveal";


export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <Fade triggerOnce duration={450} fraction={0.1}>
                    <FlexWrapper direction={"column"} align={"center"} gap={"32px"}>
                        <S.FooterLabel>Elsewhere on the web</S.FooterLabel>
                        <S.Social>
                            <a href={"https://t.me/ya_yareekk"} aria-label={"telegram"} target={"_blank"} rel="noreferrer"><Icons
                                iconId="tg"
                                width="48px" height="48px"
                                viewBox="0 0 40 40"/></a>
                            <a href={"https://www.instagram.com/ya_yarek/?igsh=Y21oNWJuY28xbWhh#"}
                               aria-label={"instagram"} target={"_blank"} rel="noreferrer"><Icons
                                iconId="inst" width="48px" height="48px"
                                viewBox="0 0 48 48"/></a>
                            <a href={"https://www.linkedin.com/in/kyarek/"} aria-label={"linkedin"}
                               target={"_blank"} rel="noreferrer"><Icons iconId="linkedin"
                                                        width="48px"
                                                        height="48px"
                                                        viewBox="0 0  48 48"/></a>
                        </S.Social>
                        <S.Reserved>© {new Date().getFullYear()} Yaroslau Kvachonak · Built with React and TypeScript.</S.Reserved>
                    </FlexWrapper>
                </Fade>
            </Container>
        </S.Footer>
    );
};




