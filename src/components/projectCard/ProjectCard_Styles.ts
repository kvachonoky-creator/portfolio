import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


const Article = styled.article`
    margin: 0 auto;
    border-radius: 24px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    background: #fff;
    max-width: 992px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 38px;
    overflow: hidden;

    a {
        border: 1px solid #25282b;
        border-radius: 24px;
        width: 150px;
    }

    @media ${theme.media.tablet} {
        flex-direction: column-reverse;
    }
`


const Picture = styled.img`
    width: 496px;
    height: 526px;
    object-fit: cover;

    @media ${theme.media.tablet} {
        width: 100%;
    }

`

const ProjectName = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
    color: #25282b;

    @media ${theme.media.tablet} {
        align-self: center;

`

const DescriptionProject = styled.div`
    max-width: 408px;
    width: 100%;
    margin: auto 38px;


    @media ${theme.media.tablet} {
        max-width: 70%;
        width: 100%;
        margin: 60px auto;
    }

    @media ${theme.media.mobile} {
        max-width: 282px;
        margin: 145px auto;
    }

`

export const S = {
    Article,
    Picture,
    ProjectName,
    DescriptionProject,

}