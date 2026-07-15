import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type SectionTitleProps = {
    title: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <SectiontitleStyled data-section={`/${props.title.toLowerCase().replace(/\s+/g, "-")}`}>
            {props.title}
        </SectiontitleStyled>
    );
};

const SectiontitleStyled = styled.h2`
    margin: 0 0 64px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: clamp(40px, 6vw, 72px);
    line-height: 0.95;
    letter-spacing: -0.055em;
    color: ${theme.colors.titleFont};
    position: relative;

    &::before {
        display: block;
        margin-bottom: 16px;
        content: attr(data-section);
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-weight: 600;
        font-size: 12px;
        line-height: 1;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: ${theme.colors.accent};
    }

    @media ${theme.media.mobile} {
        margin-bottom: 42px;
    }
`;
