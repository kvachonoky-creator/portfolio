import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {ProjectCard} from "../../../components/projectCard/ProjectCard";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Container} from "../../../components/container/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import React from "react";
import picture from "../../../assets/img/ToDoListBlog.webp"

export const Projects: React.FC = () => {

    const projectsData = [
        {
            projectTitle: "Project Name 1",
            projectText: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
            src: picture
        },
        {
            projectTitle: "Project Name 2",
            projectText: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
            src: picture
        },
        {
            projectTitle: "Project Name 3",
            projectText: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
            src: picture
        },
    ]

    return (
        <StyledProjects id="Project">
            <Container>
                <SectionTitle title={"Projects"}/>
                <FlexWrapper gap="80px" direction="column">
                    {projectsData.map((p, i) => {
                        return(
                                <ProjectCard
                                    key={i}
                                    src={picture}
                                    projectTitle={p.projectTitle}
                                    projectText={p.projectText}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </StyledProjects>

    )
        ;
};


const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 75px 0;
    position: relative;
    background-color: ${theme.colors.primaryBG};

    article:nth-child(even) {
        flex-direction: row-reverse;

        @media ${theme.media.tablet} {
            flex-direction: column-reverse;
        }
    }
    
    

`