import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Footer = styled.footer`
    position: relative;
    padding: 54px 0 60px;
    border-top: 1px solid #34405c;
    color: #fff;
    background: ${theme.colors.dark};
`;

const FooterLabel = styled.span`
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #8290aa;
`;

const Social = styled.div`
    display: flex;
    gap: 14px;

    a {
        display: grid;
        place-items: center;
        width: 48px;
        height: 48px;
        border: 1px solid #46536d;
        border-radius: 50%;
        color: #fff;
        transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

        svg {
            width: 26px;
            height: 26px;
        }

        &:hover {
            border-color: ${theme.colors.signal};
            color: ${theme.colors.signal};
            transform: translateY(-3px);
        }
    }
`;

const Reserved = styled.small`
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 13px;
    text-align: center;
    color: #8290aa;
`;

export const S = {Footer, FooterLabel, Social, Reserved};
