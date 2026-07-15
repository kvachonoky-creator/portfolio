import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {Icons} from "../../../components/icons/Icons.tsx";
import {Container} from "../../../components/container/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {skills} from "../../../data/skills.ts";

export const Skills = () => {
    return (
        <StyledSkills id="skills">
            <Container>
                <SectionTitle title="Skills"/>
                <SkillGrid>
                    {skills.map((skill) => (
                        <Fade key={skill.label} triggerOnce duration={450} fraction={0.15}>
                            <SkillItem title={skill.label} aria-label={skill.label}>
                                {skill.asset ? (
                                    <BrandIcon $source={skill.asset} $color={skill.color}/>
                                ) : (
                                    <Icons iconId={skill.iconId!} aria-hidden={true}/>
                                )}
                            </SkillItem>
                        </Fade>
                    ))}
                </SkillGrid>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    position: relative;
    padding: 95px 0;
    background: ${theme.colors.primaryBG};

    @media ${theme.media.mobile} {
        padding: 90px 0 80px;
    }
`;

const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 94px;
    align-items: center;
    justify-items: center;

    > div {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    @media screen and (max-width: 1099px) {
        grid-template-columns: repeat(4, 1fr);
        row-gap: 64px;
    }

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 50px;
    }
`;

const SkillItem = styled.div`
    display: grid;
    place-items: center;
    width: 120px;
    height: 120px;

    svg {
        width: 120px;
        height: 120px;
    }
`;

const BrandIcon = styled.span<{$source: string; $color?: string}>`
    display: block;
    width: 112px;
    height: 112px;
    background-color: ${({$color}) => $color ?? "#000"};
    mask: url("${({$source}) => $source}") center / contain no-repeat;
`;
