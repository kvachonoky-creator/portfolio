import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Article = styled.article`
    display: flex;
    width: 100%;
    min-height: 560px;
    overflow: hidden;
    border: 1px solid ${theme.colors.dark};
    border-radius: 8px;
    background: ${theme.colors.secondaryBG};
    box-shadow: 12px 12px 0 rgba(12, 21, 48, 0.07);

    a {
        align-self: flex-start;
    }

    @media ${theme.media.projectStack} {
        flex-direction: column-reverse;
        min-height: 0;
    }
`;

const CardFrame = styled.div`
    width: 100%;
    max-width: 1168px;
    margin: 0 auto;

    &:nth-child(even) ${Article} {
        flex-direction: row-reverse;

        @media ${theme.media.projectStack} {
            flex-direction: column-reverse;
        }
    }

    &:nth-child(even) img {
        border-right: 1px solid ${theme.colors.dark};
        border-left: 0;

        @media ${theme.media.projectStack} {
            border-right: 0;
        }
    }
`;

const Picture = styled.img`
    flex: 0 0 56%;
    width: 56%;
    height: 560px;
    object-fit: contain;
    object-position: center;
    border-left: 1px solid ${theme.colors.dark};
    background: #dce4f0;
    filter: saturate(0.86);
    transition: filter 0.3s ease;

    ${Article}:hover & {
        filter: saturate(1);
    }

    @media ${theme.media.projectStack} {
        flex-basis: auto;
        width: 100%;
        height: min(70vw, 540px);
        border-bottom: 1px solid ${theme.colors.dark};
        border-left: 0;
    }

    @media screen and (max-width: 374px) {
        height: 420px;
    }
`;

const ProjectName = styled.h3`
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: clamp(34px, 4vw, 50px);
    line-height: 1;
    letter-spacing: -0.05em;
    color: ${theme.colors.titleFont};
`;

const ProjectLabel = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.colors.accent};

    &::before {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        content: "";
        background: ${theme.colors.signal};
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex: 1 1 44%;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    min-width: 0;
    padding: 64px clamp(32px, 4vw, 58px);

    @media ${theme.media.projectStack} {
        flex-basis: auto;
        min-height: 440px;
        padding: 60px 40px;
    }

    @media ${theme.media.mobile} {
        min-height: 400px;
        padding: 52px 28px;
    }
`;

export const S = {CardFrame, Article, Picture, ProjectName, ProjectLabel, Wrapper};
