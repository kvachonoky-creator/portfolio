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
                        <a href="https://t.me/ya_yareekk" target="_blank" rel="noreferrer">
                            telegram <span aria-hidden="true">↗</span>
                        </a>
                        <a href="https://www.linkedin.com/in/kyarek/" target="_blank" rel="noreferrer">
                            linkedin <span aria-hidden="true">↗</span>
                        </a>
                        <a href="https://github.com/yarek-dev" target="_blank" rel="noreferrer">
                            github <span aria-hidden="true">↗</span>
                        </a>
                    </S.Social>
                    <S.Reserved>© {new Date().getFullYear()} Yaroslau Kvachonak · Built with React and TypeScript.</S.Reserved>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};




