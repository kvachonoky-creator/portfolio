import {Fade} from "react-awesome-reveal";
import {SectionText} from "../sectionText/SectionText";
import {LinkButton} from "../linkButton/LinkButton.tsx";
import {S} from "./ProjectCard_Styles.ts";

type ProjectCardProps = {
    projectTitle: string;
    projectText: string;
    src: string;
    href?: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <S.CardFrame>
            <Fade direction="up" triggerOnce duration={500} fraction={0.1} style={{width: "100%"}}>
                <S.Article>
                    <S.Wrapper>
                        <S.ProjectName>{props.projectTitle}</S.ProjectName>
                        <SectionText title={props.projectText}/>
                        <LinkButton title="View Project" href={props.href} disabled={!props.href}/>
                    </S.Wrapper>
                    <S.Picture
                        src={props.src}
                        alt={`${props.projectTitle} preview`}
                        width={496}
                        height={524}
                        loading="lazy"
                        decoding="async"
                    />
                </S.Article>
            </Fade>
        </S.CardFrame>
    );
};
