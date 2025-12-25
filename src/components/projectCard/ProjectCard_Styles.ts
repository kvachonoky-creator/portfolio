import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


const Article = styled.article`
    border-radius: 24px;
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    background: #fff;
    max-width: 992px;
    width: 100%;
    min-height: 526px;
    display: flex;
    overflow: hidden;

    a {
        border: 1px solid #25282b;
        border-radius: 24px;
        width: 151px;
    }

    @media ${theme.media.tablet} {
        flex-direction: column-reverse;
    }
`

const Picture = styled.img`
    width: 100%;
    min-height: 100%;
    object-fit: cover;

    @media ${theme.media.tablet} {
        width: 100%;
    }

`

const ProjectName = styled.h3`
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
    color: #25282b;
    
`

const Wrapper = styled.div`
display: flex;
    flex-direction: column;
    padding: 130px 38px 130px 50px;
    gap: 24px;
    justify-content: center;
    flex-grow: 1;
`


export const S = {
    Article,
    Picture,
    ProjectName,
    Wrapper,
}