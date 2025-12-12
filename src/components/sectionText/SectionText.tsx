import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

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
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.5;
    color: ${theme.colors.textFont};
`