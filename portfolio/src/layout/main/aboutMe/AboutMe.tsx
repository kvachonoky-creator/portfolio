import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {SectionText} from "../../../components/sectionText/SectionText.tsx";
import {Button} from "../../../components/button/Button.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
// import Photo from "" указать путь к фото нужно

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <FlexWrapper direction="column">
                <StyledMainTitle>frontend developer</StyledMainTitle>
                <SectionTitle title={"Hello, my name is Yaroslau Kvachonak"}></SectionTitle>
                <SectionText title={"About me"}></SectionText>
                <Button title={"Projects"}/>
                <Button title={"LinkedIn"}/>
            </FlexWrapper>
            <Photo src="" alt=""/>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    display: flex;
    justify-content: space-around;
    background-color: green;
`

const StyledMainTitle = styled.h1`

`

const Photo = styled.img`
    width: 200px;
    height: 200px;
`