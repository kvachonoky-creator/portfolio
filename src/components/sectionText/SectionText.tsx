import styled from "styled-components";

type SectionTextProps = {
    title: string;
}

export const SectionText = ({title} : SectionTextProps) => {
    return (
        <SectionTextStyled>
            {title}
        </SectionTextStyled>
    );
};


const SectionTextStyled = styled.p`
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: #828282;
`