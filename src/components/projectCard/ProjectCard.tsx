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
                <Picture alt="picture"/>
            </FlexWrapper>
        </StyledArticle>
    )
}


const StyledArticle = styled.article`
    display: flex;
    background: #fff;
    width: 400px;
`

const Picture = styled.img`
    width: 150px;
    height: 150px;
`

const ProjectName = styled.h3`
            `

