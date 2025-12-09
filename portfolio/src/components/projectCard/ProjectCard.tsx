import styled from "styled-components";
import { FlexWrapper } from "../flexWrapper/FlexWrapper";
import { SectionText } from "../sectionText/SectionText";
import { Button } from "../button/Button"

export const ProjectCard = () => {
    return (
        <StyledArticle>
            <FlexWrapper>
                <FlexWrapper gap="24px" direction="column">
                    <ProjectName>Project name</ProjectName>
                    <SectionText title={"lorem 123321"} />
                    <Button title={"ViewProject"} type="submit"/>
                </FlexWrapper>
                <Picture />
            </FlexWrapper>
        </StyledArticle>
    )
}


const StyledArticle = styled.article`
            display:flex;
            background: #fff;
            `

const Picture = styled.img`
            
            `

const ProjectName = styled.h3`
            `

