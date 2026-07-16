import {LinkButton} from "../../../components/linkButton/LinkButton.tsx";
import {Container} from "../../../components/container/Container.ts";
import {SectionText} from "../../../components/sectionText/SectionText.tsx";
import {PhotoBlock} from "../../../components/photoBlock/PhotoBlock.tsx";
import React from "react";
import {S} from "./AboutMe_Styles.ts";


export const AboutMe: React.FC = () => {
    return (
        <S.StyledAboutMe id="about">
            <Container>
                <S.HeroContent>
                    <S.BlockInfo>
                        <S.InfoContent>
                            <S.StyledProfession>
                                <S.StatusDot aria-hidden="true"/>
                                <span>Frontend developer · open to work</span>
                            </S.StyledProfession>
                            <S.StyledSectionTitle>
                                Hello, my name is <em>Yaroslau</em>
                            </S.StyledSectionTitle>
                            <SectionText
                                title={"I’m a frontend developer experienced in building cross-browser, responsive web applications with TypeScript, React, and Redux. I’m open to new opportunities and would be happy to work with you."}
                            />
                            <S.Actions>
                                <LinkButton href="#projects" title="Projects"/>
                                <LinkButton href="https://www.linkedin.com/in/kyarek/" title="LinkedIn"/>
                            </S.Actions>
                        </S.InfoContent>
                    </S.BlockInfo>
                    <PhotoBlock/>
                </S.HeroContent>
            </Container>
        </S.StyledAboutMe>
    );
};





