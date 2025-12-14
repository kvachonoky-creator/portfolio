import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {ProjectCard} from "../../../components/projectCard/ProjectCard";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Container} from "../../../components/container/Container.ts";


export const Projects = () => {
    return (
        <StyledProjects id="Project">
            <Container>
                <SectionTitle title={"Projects"}/>
                <FlexWrapper gap="80px" direction="column" width="100%">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </FlexWrapper>
            </Container>
        </StyledProjects>

    );
};


const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 144px;

    article:nth-child(even) {
        flex-direction: row-reverse;
    }
`