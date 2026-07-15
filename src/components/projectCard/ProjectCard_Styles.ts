import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Article = styled.article`
    display: flex;
    width: 100%;
    min-height: 524px;
    overflow: hidden;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0 6px 64px rgba(112, 144, 176, 0.1);

    a {
        width: 151px;
        border-width: 1px;
        border-radius: 24px;
    }

    @media ${theme.media.projectStack} {
        flex-direction: column-reverse;
        min-height: 0;
    }
`;

const CardFrame = styled.div`
    width: 100%;
    max-width: 992px;
    margin: 0 auto;

    &:nth-child(even) ${Article} {
        flex-direction: row-reverse;

        @media ${theme.media.projectStack} {
            flex-direction: column-reverse;
        }
    }
`;

const Picture = styled.img`
    flex: 0 0 50%;
    width: 50%;
    height: 524px;
    object-fit: cover;

    @media ${theme.media.projectStack} {
        flex-basis: auto;
        width: 100%;
        height: 524px;
    }

    @media screen and (max-width: 374px) {
        height: clamp(440px, 140vw, 524px);
    }
`;

const ProjectName = styled.h3`
    margin: 0;
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
    color: ${theme.colors.titleFont};
`;

const Wrapper = styled.div`
    display: flex;
    flex: 1 1 50%;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    min-width: 0;
    padding: 80px 38px 80px 50px;

    @media ${theme.media.projectStack} {
        flex-basis: auto;
        min-height: 523px;
        padding: 80px 35px;
    }

    @media ${theme.media.mobile} {
        padding: 80px 35px;
    }

    @media screen and (max-width: 374px) {
        padding-inline: 24px;
    }
`;

export const S = {CardFrame, Article, Picture, ProjectName, Wrapper};
