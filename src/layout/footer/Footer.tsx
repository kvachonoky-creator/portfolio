import {Icons} from "../../components/icons/Icons.tsx";
import {Container} from "../../components/container/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {S} from "./Footer_Styles.ts"
import React from "react";


export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} align={"center"} gap={"32px"}>
                    <S.Social>
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
                    </S.Social>
                    <S.Reserved>© 2025 Yaroslau Kvachonak, All Rights Reserved.</S.Reserved>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};




