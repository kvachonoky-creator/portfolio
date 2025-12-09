import { SectionTitle } from "../../../components/sectionTitle/SectionTitle.tsx";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper.tsx";
import { Icons } from "../../../components/icons/Icons.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle title={"Skills"} />
            <FlexWrapper wrap={"wrap"} gap={"96px"}>
                <Icons iconId={"vsCode"} />
                <Icons iconId={"js"} />
                <Icons iconId={"typescript"} />
                <Icons iconId={"react"} />
                <Icons iconId={"redux"} />
                <Icons iconId={"git"} />
                <Icons iconId={"bootstrap"} />
                <Icons iconId={"sass"} />
                <Icons iconId={"css"} />
                <Icons iconId={"html"} />
                <Icons iconId={"greensock"} />
                <Icons iconId={"github"} />
            </FlexWrapper>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 144px;
`