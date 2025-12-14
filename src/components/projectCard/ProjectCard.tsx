import styled from "styled-components";
import { FlexWrapper } from "../flexWrapper/FlexWrapper";
import { SectionText } from "../sectionText/SectionText";
import picture from "../../assets/img/072120-ToDoList-Blog.png"
import {LinkButton} from "../linkButton/LinkButton.tsx";

export const ProjectCard = () => {
    return (
        <StyledArticle>
                <FlexWrapper gap="24px" direction="column" justify="center" maxwidth={"408px"} width={"100%"} margin={"0 38px 0 50px"}>
                    <ProjectName>Project name</ProjectName>
                    <SectionText title={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} />
                    <LinkButton title={"View Project"}/>
                </FlexWrapper>
                <Picture src={picture} alt="picture"/>
        </StyledArticle>
    )
}


const StyledArticle = styled.article`
    margin: 0 auto;
    border-radius: 24px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    background: #fff;
    max-width: 992px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 38px;
    overflow: hidden;
    
     a {
         border: 1px solid #25282b;
         border-radius: 24px;
         width: 150px;
     }
`


const Picture = styled.img`
    width: 496px;
    height: 526px;
    object-fit: cover;
`

const ProjectName = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
    color: #25282b;
`

