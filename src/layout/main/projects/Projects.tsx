import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {ProjectCard} from "../../../components/projectCard/ProjectCard";
import {Container} from "../../../components/container/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {projects} from "../../../data/projects.ts";

export const Projects = () => {
    return (
        <StyledProjects id="projects">
            <Container>
                <SectionTitle title="Projects"/>
                <ProjectList>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            src={project.image}
                            projectTitle={project.title}
                            projectText={project.description}
                            href={project.url}
                        />
                    ))}
                </ProjectList>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    position: relative;
    padding: 75px 0 69px;
    background-color: ${theme.colors.primaryBG};

    @media ${theme.media.mobile} {
        padding: 80px 0;
    }
`;

const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;

    @media ${theme.media.mobile} {
        gap: 50px;
    }
`;
