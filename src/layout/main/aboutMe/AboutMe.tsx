import {SectionText} from "../../../components/sectionText/SectionText.tsx";
import {LinkButton} from "../../../components/linkButton/LinkButton.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import photo from "../../../assets/img/myPhoto.webp"
import {Container} from "../../../components/container/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper>
                    <FlexWrapper direction="column">
                        <StyledMainTitle>frontend developer</StyledMainTitle>
                        <span><StyledSectionTitle>Hello, my name is Yaroslau Kvachonak</StyledSectionTitle></span>
                        <SectionText
                            title="I am a frontend developer. I have experience in cross-browser adaptive and responsive web application development. I create with TypeScript, React, Redux. I will be glad to join and work with you!"/>
                        <LinkButton title={"Projects"}/>
                        <LinkButton title={"LinkedIn"}/>
                    </FlexWrapper>
                    <Photo src={photo} alt="My photo"/>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    height: 100vh;
    margin-bottom: 144px;
`

const StyledMainTitle = styled.h1`
    margin-top: 55px;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${theme.colors.accent};
`

const StyledSectionTitle = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 1.2;
    color: ${theme.colors.titleFont};
`

const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: cover;
    margin-bottom: 144px;
`