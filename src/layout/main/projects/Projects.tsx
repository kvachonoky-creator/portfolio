import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { ProjectCard } from "../../../components/projectCard/ProjectCard";




export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle title={"Projects"} />
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </StyledProjects>

    );
};


const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 144px;
`