import {Fade} from "react-awesome-reveal";
import {SectionText} from "../sectionText/SectionText";
import {LinkButton} from "../linkButton/LinkButton.tsx";
import {S} from "./ProjectCard_Styles.ts";
import {useTheme} from "styled-components";

type ProjectCardProps = {
    projectTitle: string;
    projectText: string;
    src: string;
    darkSrc: string;
    href?: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
    const activeTheme = useTheme();
    const isDarkTheme = activeTheme.mode === "dark";

    return (
        <S.CardFrame>
            <Fade direction="up" triggerOnce duration={500} fraction={0.1} style={{width: "100%"}}>
                <S.Article>
                    <S.Wrapper>
                        <S.ProjectLabel>{props.href ? "Public repository" : "Case study in progress"}</S.ProjectLabel>
                        <S.ProjectName>{props.projectTitle}</S.ProjectName>
                        <SectionText title={props.projectText}/>
                        {props.href ? (
                            <LinkButton title="View repository" href={props.href}/>
                        ) : (
                            <S.ComingSoon>Case study in progress</S.ComingSoon>
                        )}
                    </S.Wrapper>
                    <S.PreviewFrame>
                        <S.Picture
                            $visible={!isDarkTheme}
                            src={props.src}
                            alt={!isDarkTheme ? `${props.projectTitle} preview` : ""}
                            aria-hidden={isDarkTheme}
                            width={1440}
                            height={810}
                            loading="lazy"
                            decoding="async"
                        />
                        <S.Picture
                            $visible={isDarkTheme}
                            src={props.darkSrc}
                            alt={isDarkTheme ? `${props.projectTitle} preview` : ""}
                            aria-hidden={!isDarkTheme}
                            width={1440}
                            height={810}
                            loading="lazy"
                            decoding="async"
                        />
                    </S.PreviewFrame>
                </S.Article>
            </Fade>
        </S.CardFrame>
    );
};
