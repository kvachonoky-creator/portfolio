import styled from "styled-components";

type SectionTextProps = {
    title: string;
}

export const SectionText = (props: SectionTextProps) => {
    return (
        <SectionTextStyled>
            {props.title}
        </SectionTextStyled>
    );
};


const SectionTextStyled = styled.p`
`