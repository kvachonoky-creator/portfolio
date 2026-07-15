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
                                <IconFrame>
                                    {skill.asset ? (
                                        <BrandIcon $source={skill.asset} $color={skill.color}/>
                                    ) : (
                                        <Icons iconId={skill.iconId!} aria-hidden={true}/>
                                    )}
                                </IconFrame>
                                <span>{skill.label}</span>
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
    padding: 112px 0;
    border-block: 1px solid ${theme.colors.line};
    background: rgba(251, 252, 254, 0.7);

    @media ${theme.media.mobile} {
        padding: 90px 0 80px;
    }
`;

const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    > div {
        width: 100%;
    }

    @media ${theme.media.tablet} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    min-height: 76px;
    padding: 12px 16px;
    border: 1px solid ${theme.colors.line};
    border-radius: 4px;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 12px;
    color: ${theme.colors.titleFont};
    background: ${theme.colors.secondaryBG};
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
        border-color: ${theme.colors.accent};
        transform: translateY(-3px);
    }

    @media ${theme.media.mobile} {
        flex-direction: column;
        justify-content: center;
        gap: 8px;
        min-height: 104px;
    }
`;

const IconFrame = styled.span`
    display: grid;
    flex: 0 0 38px;
    place-items: center;
    width: 38px;
    height: 38px;

    svg {
        width: 34px;
        height: 34px;
    }
`;

const BrandIcon = styled.span<{$source: string; $color?: string}>`
    display: block;
    width: 32px;
    height: 32px;
    background-color: ${({$color}) => $color ?? "#000"};
    mask: url("${({$source}) => $source}") center / contain no-repeat;
`;
