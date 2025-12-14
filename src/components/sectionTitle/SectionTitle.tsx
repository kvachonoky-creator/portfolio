import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

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
    margin-bottom: 88px;
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 1.5;
    text-align: center;
    color: #25282b;
    
    position: relative;
    
    &::before {
        position: absolute;
        content: "";
        border-radius: 2px;
        width: 100px;
        height: 4px;
        background: ${theme.colors.accent};
        left: 50%;
        transform: translateX(-50%);
        bottom: -4px;
    }
`
