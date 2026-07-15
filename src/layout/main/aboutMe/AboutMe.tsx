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
                                Frontend developer · open to work
                            </S.StyledProfession>
                            <S.StyledSectionTitle>
                                I build interfaces that <em>hold up</em> in the real world.
                            </S.StyledSectionTitle>
                            <SectionText
                                title={"I’m Yaroslau, a frontend developer focused on responsive, cross-browser products built with TypeScript, React, and Redux."}
                            />
                            <S.Actions>
                                <LinkButton href="#projects" title="Explore projects"/>
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





