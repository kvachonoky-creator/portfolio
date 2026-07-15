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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    min-height: 48px;
    padding: 10px 20px;
    border: 1px solid ${theme.colors.titleFont};
    border-radius: 4px;
    font-family: Raleway, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
    color: ${theme.colors.titleFont};
    background: transparent;
    transition: transform 0.2s ease, background-color 0.2s, border-color 0.2s, color 0.2s;

    &[aria-disabled="true"] {
        cursor: default;
        opacity: 0.65;
    }

    &:hover {
        background-color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
        color: white;
        transform: translateY(-2px);
    }
`;
