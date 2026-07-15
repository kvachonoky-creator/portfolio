import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const StyledAboutMe = styled.section`
    position: relative;
    overflow: clip;
    min-height: 678px;

    p {
        width: 100%;
        margin-bottom: 32px;
        font-size: 24px;
        line-height: 1.5;
    }

    @media ${theme.media.projectStack} {
        min-height: 0;
    }
`;

const HeroContent = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    position: relative;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    min-height: 678px;

    @media ${theme.media.projectStack} {
        display: flex;
        flex-direction: column;
        min-height: 0;
    }
`;

const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const BlockInfo = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    min-width: 0;
    max-width: 508px;
    padding: 111px 0 80px;

    @media ${theme.media.projectStack} {
        max-width: 100%;
        padding: 50px 0 90px;
    }

    @media ${theme.media.mobile} {
        width: calc(100vw - 30px);
    }
`;

const StyledProfession = styled.div`
    min-height: 27px;
    margin: 0 0 12px;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.35;
    text-transform: uppercase;
    color: ${theme.colors.accent};

    > span {
        display: none;
    }

    @media (prefers-reduced-motion: reduce) {
        > span {
            display: block;
        }

        .Typewriter {
            display: none;
        }
    }
`;

const StyledSectionTitle = styled.h1`
    margin: 0 0 32px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 1.2;
    color: ${theme.colors.titleFont};

    @media ${theme.media.tablet} {
        font-size: 42px;
    }
`;

export const S = {
    StyledAboutMe,
    HeroContent,
    InfoContent,
    Actions,
    StyledProfession,
    StyledSectionTitle,
    BlockInfo,
};
