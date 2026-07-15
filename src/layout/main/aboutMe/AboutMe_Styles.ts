import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const StyledAboutMe = styled.section`
    position: relative;
    overflow: clip;
    min-height: 780px;
    padding-top: 72px;

    p {
        max-width: 620px;
        margin-bottom: 36px;
        font-size: clamp(18px, 2vw, 22px);
        line-height: 1.6;
    }

    @media ${theme.media.projectStack} {
        min-height: 0;
    }
`;

const HeroContent = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
    gap: clamp(40px, 6vw, 88px);
    align-items: center;
    position: relative;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    min-height: 708px;

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
    max-width: 660px;
    padding: 100px 0 90px;

    @media ${theme.media.projectStack} {
        max-width: 100%;
        padding: 76px 0 80px;
    }

    @media ${theme.media.mobile} {
        width: calc(100vw - 30px);
    }
`;

const StyledProfession = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 28px;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-weight: 600;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.colors.textFont};
`;

const StatusDot = styled.span`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${theme.colors.signal};
    box-shadow: 0 0 0 5px rgba(255, 107, 53, 0.15);
`;

const StyledSectionTitle = styled.h1`
    max-width: 700px;
    margin: 0 0 34px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: clamp(54px, 7vw, 92px);
    line-height: 0.96;
    letter-spacing: -0.065em;
    color: ${theme.colors.titleFont};

    em {
        font-family: Raleway, sans-serif;
        font-weight: 500;
        font-style: normal;
        color: ${theme.colors.accent};
    }
`;

export const S = {
    StyledAboutMe,
    HeroContent,
    InfoContent,
    Actions,
    StyledProfession,
    StatusDot,
    StyledSectionTitle,
    BlockInfo,
};
