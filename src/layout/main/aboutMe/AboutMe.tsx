import {LinkButton} from "../../../components/linkButton/LinkButton.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Container} from "../../../components/container/Container.ts";
import {SectionText} from "../../../components/sectionText/SectionText.tsx";
import {PhotoBlock} from "../../../components/photoBlock/PhotoBlock.tsx";
import React from "react";
import {S} from "./AboutMe_Styles.ts"


export const AboutMe: React.FC = () => {
    return (
        <S.StyledAboutMe id="About">
            <Container>
                <FlexWrapper>
                    <S.BlockInfo>
                        <FlexWrapper direction="column" gap={"0px"}>
                            <S.StyledMainTitle>frontend developer</S.StyledMainTitle>
                            <span><S.StyledSectionTitle>Hello, my name is Yaroslau Kvachonak</S.StyledSectionTitle></span>
                            <SectionText
                                title={"I am a frontend developer. I have experience in cross-browser adaptive and responsive web application development. I create with TypeScript, React, Redux. I will be glad to join and work with you!"}
                            />
                            <FlexWrapper gap="12px">
                                <LinkButton href={"#"} title={"Projects"}/>
                                <LinkButton href={"https://www.linkedin.com/in/kyarek/"} title={"LinkedIn"}/>
                            </FlexWrapper>
                        </FlexWrapper>
                    </S.BlockInfo>
                    <PhotoBlock/>
                </FlexWrapper>
            </Container>
        </S.StyledAboutMe>
    );
};




