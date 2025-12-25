// import {FlexWrapper} from "../flexWrapper/FlexWrapper";
import {SectionText} from "../sectionText/SectionText";
import {LinkButton} from "../linkButton/LinkButton.tsx";
import {S} from "./ProjectCard_Styles.ts"
import {Slide} from "react-awesome-reveal";

type ProjectCardProps = {
    projectTitle: string
    projectText: string
    src: string

}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <S.Article>
            <Slide direction={"left"}>
                <S.Wrapper>
                    <S.ProjectName>{props.projectTitle}</S.ProjectName>
                    <SectionText title={props.projectText}/>
                    <LinkButton title={"View Project"}/>
                </S.Wrapper>
            <S.Picture src={props.src} alt="picture"/>
            </Slide>
        </S.Article>
    )
}

