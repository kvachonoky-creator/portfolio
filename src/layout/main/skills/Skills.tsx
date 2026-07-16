import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {Container} from "../../../components/container/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {skillGroups} from "../../../data/skills.ts";

export const Skills = () => {
    return (
        <StyledSkills id="skills">
            <Container>
                <SectionTitle title="Skills"/>
                <Fade triggerOnce duration={480} fraction={0.1} style={{width: "100%"}}>
                    <SkillMatrix>
                        {skillGroups.map((group) => (
                            <SkillGroup key={group.label}>
                                <GroupHeading>
                                    <span>{group.label}</span>
                                    <small>{String(group.skills.length).padStart(2, "0")}</small>
                                </GroupHeading>
                                <SkillGrid>
                                    {group.skills.map((skill) => (
                                        <SkillItem key={skill.label}>
                                            <SkillCode aria-hidden="true">{skill.code}</SkillCode>
                                            <span>{skill.label}</span>
                                        </SkillItem>
                                    ))}
                                </SkillGrid>
                            </SkillGroup>
                        ))}
                    </SkillMatrix>
                </Fade>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    position: relative;
    padding: 112px 0;
    border-block: 1px solid ${theme.colors.line};
    background: color-mix(in srgb, ${theme.colors.secondaryBG} 70%, transparent);

    @media ${theme.media.mobile} {
        padding: 90px 0 80px;
    }
`;

const SkillMatrix = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 52px clamp(28px, 5vw, 72px);

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
        gap: 42px;
    }
`;

const SkillGroup = styled.div`
    min-width: 0;
`;

const GroupHeading = styled.h3`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    padding-top: 13px;
    border-top: 1px solid ${theme.colors.frame};
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${theme.colors.accent};

    small {
        font: inherit;
        color: ${theme.colors.textFont};
    }
`;

const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
`;

const SkillItem = styled.div`
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    align-items: center;
    min-height: 66px;
    overflow: hidden;
    border: 1px solid ${theme.colors.line};
    border-radius: 4px;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 12px;
    color: ${theme.colors.titleFont};
    background: ${theme.colors.secondaryBG};
    transition: border-color 0.2s ease, transform 0.2s ease;

    > span:last-child {
        padding: 10px 12px;
        line-height: 1.35;
    }

    &:hover {
        border-color: ${theme.colors.accent};
        transform: translateY(-2px);
    }

    @media screen and (max-width: 390px) {
        grid-template-columns: 38px minmax(0, 1fr);
        font-size: 11px;

        > span:last-child {
            padding-inline: 8px;
        }
    }
`;

const SkillCode = styled.span`
    display: grid;
    align-self: stretch;
    place-items: center;
    border-right: 1px solid ${theme.colors.line};
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: ${theme.colors.accent};
    background: ${theme.colors.accentSoft};
`;
