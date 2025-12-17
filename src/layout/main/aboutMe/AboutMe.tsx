import {LinkButton} from "../../../components/linkButton/LinkButton.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import photo from "../../../assets/img/myPhoto.webp"
import {Container} from "../../../components/container/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {SectionText} from "../../../components/sectionText/SectionText.tsx";

export const AboutMe = () => {
    return (
        <StyledAboutMe id="AboutMe">
            <Container>
                <FlexWrapper gap={"92px"}>
                    <FlexWrapper direction="column" gap={"0px"}>
                        <StyledMainTitle>frontend developer</StyledMainTitle>
                        <span><StyledSectionTitle>Hello, my name is Yaroslau Kvachonak</StyledSectionTitle></span>
                        <SectionText title={ "I am a frontend developer. I have experience in cross-browser adaptive and responsive web application development. I create with TypeScript, React, Redux. I will be glad to join and work with you!"}
                           />
                        <FlexWrapper gap="12px">
                            <LinkButton href={"#"} title={"Projects"}/>
                            <LinkButton href={"https://www.linkedin.com/in/kyarek/"} title={"LinkedIn"}/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <Photo src={photo} alt="My photo"/>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    margin-bottom: 144px;
    
    p {
        font-size: 24px;
        margin-bottom: 32px;
        max-width: 486px;
        width: 100%;
    }
    
`

const StyledMainTitle = styled.h1`
    margin-top: 55px;
    margin-bottom: 12px;
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
    margin-bottom: 32px;
`


const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: contain;
    margin-bottom: 144px;
`
