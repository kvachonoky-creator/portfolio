import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const StyledAboutMe = styled.section`
    margin-bottom: 116px;
    position: relative;

    p {
        font-size: 24px;
        margin-bottom: 32px;
        width: 100%;

        @media screen and (max-width: 1000px){
            max-width: none;
        }
    }
    
`

const BlockInfo = styled.div`
    margin-top: 55px;
    max-width: 550px;
    width: 100%;

    @media screen and (max-width: 1050px) {
        margin-top: 600px;
        max-width: none;
    }

    @media ${theme.media.tablet} {
        margin-top: 500px;
    }
    
    @media ${theme.media.mobile} {
        margin-top: 415px;
    }
`

const StyledMainTitle = styled.h1`
    margin-top: 55px;
    margin-bottom: 12px;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${theme.colors.accent};
    
`

const StyledSectionTitle = styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 1.2;
    color: ${theme.colors.titleFont};
    margin-bottom: 32px;

    @media ${theme.media.tablet} {
        font-size: 42px;
    }
`

export const  S = {
    StyledAboutMe,
    StyledMainTitle,
    StyledSectionTitle,
    BlockInfo,
}