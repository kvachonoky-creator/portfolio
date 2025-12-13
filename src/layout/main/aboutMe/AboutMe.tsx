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
                <FlexWrapper gap={"92px"}>
                    <FlexWrapper direction="column" gap={"0px"}>
                        <StyledMainTitle>frontend developer</StyledMainTitle>
                        <span><StyledSectionTitle>Hello, my name is Yaroslau Kvachonak</StyledSectionTitle></span>
                        <StyledMainText>
                            I am a frontend developer. I have experience in cross-browser adaptive and responsive web application development. I create with TypeScript, React, Redux. I will be glad to join and work with you!</StyledMainText>
                        <FlexWrapper gap="12px">
                            <LinkButton title={"Projects"}/>
                            <LinkButton title={"LinkedIn"}/>
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

const StyledMainText = styled.p`
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.5;
    color: ${theme.colors.textFont};
    margin-bottom: 32px;
    max-width: 486px;
    width: 100%;
`

const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: cover;
    margin-bottom: 144px;
`
