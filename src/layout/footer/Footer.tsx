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
                        <S.Social>
                            <a href={"https://t.me/ya_yareekk"} aria-label={"Telegram"} target={"_blank"} rel="noreferrer"><Icons
                                iconId="tg"
                                width="26px" height="26px"
                                viewBox="4 0 40 40"/></a>
                            <a href={"https://www.instagram.com/ya_yarek/?igsh=Y21oNWJuY28xbWhh#"}
                               aria-label={"Instagram"} target={"_blank"} rel="noreferrer"><Icons
                                iconId="inst" width="26px" height="26px"
                                viewBox="0 0 48 48"/></a>
                            <a href={"https://www.linkedin.com/in/kyarek/"} aria-label={"LinkedIn"}
                               target={"_blank"} rel="noreferrer"><Icons iconId="linkedin"
                                                        width="26px"
                                                        height="26px"
                                                        viewBox="0 0  48 48"/></a>
                        </S.Social>
                        <S.Reserved>© {new Date().getFullYear()} Yaroslau Kvachonak · Built with React and TypeScript.</S.Reserved>
                    </FlexWrapper>
                </Fade>
            </Container>
        </S.Footer>
    );
};




