import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Icons} from "../../../components/icons/Icons.tsx";
import {Container} from "../../../components/container/Container.ts";

export const Skills = () => {

    const skillsIcon: Array<string> = ["vsCode", "js", "typescript", "react", "redux", "git", "bootstrap", "sass", "css", "html", "greensock", "github"]

    return (
        <StyledSkills>
            <Container>
                <SectionTitle title={"Skills"}/>
                <FlexWrapper wrap={"wrap"} gap={"74px 96px"} justify={"center"}>
                    {skillsIcon.map((icon, i) => {
                        return (
                            <Icons key={i} aria-label={icon} iconId={icon}/>
                        )
                    })}
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 144px;
`