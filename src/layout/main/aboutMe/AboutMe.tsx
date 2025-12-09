import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {SectionText} from "../../../components/sectionText/SectionText.tsx";
import {Button} from "../../../components/button/Button.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import photo from "../../../assets/img/myPhoto.webp"

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <FlexWrapper direction="column">
                <StyledMainTitle>frontend developer</StyledMainTitle>
                <SectionTitle title={"Hello, my name is Yaroslau Kvachonak"}></SectionTitle>
                <SectionText title={"I am a frontend developer. I have experience in cross-browser adaptive and responsive web application development. I create with TypeScript, React, Redux. I will be glad to join and work with you!"}></SectionText>
                <Button title={"Projects"}/>
                <Button title={"LinkedIn"}/>
            </FlexWrapper>
            <Photo src={photo} alt="My photo"/>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    aling-items:center;
    height: 100vh;
`

const StyledMainTitle = styled.h1`

`

const Photo = styled.img`
    width: 720px;
    height: 629px;
    object-fit: cover;
    margin-bottom: 144px;
`