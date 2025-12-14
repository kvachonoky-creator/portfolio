import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type ButtonProps = {
    title: string
    href?: string
}


export const LinkButton = (props: ButtonProps) => {
    return (
        <StyledLinkButton href={props.href} target="_blank">
            {props.title}
        </StyledLinkButton>
    );
};


const StyledLinkButton = styled.a`
    border: 2px solid #25282b;
    border-radius: 8px;
    padding: 8px 24px;
    width: 117px;
    height: 43px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: #25282b;
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
        background-color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
    }

    &:active {
        transform: scale(0.9);
    }
`