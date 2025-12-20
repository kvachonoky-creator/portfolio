import {FlexWrapper} from "../flexWrapper/FlexWrapper";
import {SectionText} from "../sectionText/SectionText";
import {LinkButton} from "../linkButton/LinkButton.tsx";
import {S} from "./ProjectCard_Styles.ts"

type ProjectCardProps = {
    projectTitle: string
    projectText: string
    src: string

}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <S.Article>
            <S.DescriptionProject>
                <FlexWrapper gap="24px" direction="column" justify="center">
                    <S.ProjectName>{props.projectTitle}</S.ProjectName>
                    <SectionText title={props.projectText}/>
                    <LinkButton title={"View Project"}/>
                </FlexWrapper>
            </S.DescriptionProject>
            <S.Picture src={props.src} alt="picture"/>
        </S.Article>
    )
}

