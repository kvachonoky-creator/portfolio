import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Icons} from "../../../components/icons/Icons.tsx";
import {Container} from "../../../components/container/Container.ts";
import {Zoom} from "react-awesome-reveal";
import {theme} from "../../../styles/Theme.ts";

export const Skills = () => {

    const skillsIcon: Array<string> = ["vsCode", "js", "typescript", "react", "redux", "git", "bootstrap", "sass", "css", "html", "greensock", "github"]

    return (
        <StyledSkills>
            <Container>
                <SectionTitle title={"Skills"}/>
                <FlexWrapper wrap={"wrap"} gap={"74px 96px"} justify={"center"}>
                    <Zoom cascade={true} damping={0.3}>
                        {skillsIcon.map((icon, i) => {
                            return (
                                <Icons key={i} aria-label={icon} iconId={icon}/>
                            )
                        })}
                    </Zoom>

                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};
const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    padding: 95px 0;
    position: relative;
    background: ${theme.colors.primaryBG};
`