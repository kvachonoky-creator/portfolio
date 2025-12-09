import styled from "styled-components";

type SectionTitleProps = {
    title: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <SectiontitleStyled>
            {props.title}
        </SectiontitleStyled>
    );
};

const SectiontitleStyled = styled.h2`
    margin: 0 auto;
`
