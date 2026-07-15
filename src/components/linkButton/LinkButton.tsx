import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type ButtonProps = {
    title: string
    href?: string
    disabled?: boolean
}


export const LinkButton = (props: ButtonProps) => {
    const isExternal = props.href?.startsWith("http");

    return (
        <StyledLinkButton
            href={props.disabled ? undefined : props.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            aria-disabled={props.disabled || undefined}
            tabIndex={props.disabled ? -1 : undefined}
        >
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
    white-space: nowrap;
    color: #25282b;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s;

    &[aria-disabled="true"] {
        cursor: default;
        opacity: 0.65;
    }

    &:hover {
        background-color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
        color: white;
        box-shadow: 0 6px 18px rgba(6, 104, 246, 0.2);
    }
    
`
