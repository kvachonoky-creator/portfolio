import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Footer = styled.footer`
    position: relative;
    padding: 54px 0 60px;
    border-top: 1px solid ${theme.colors.finalLine};
    color: ${theme.colors.finalText};
    background: ${theme.colors.finalBG};
`;

const Social = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px 28px;

    a {
        position: relative;
        display: inline-flex;
        align-items: baseline;
        gap: 5px;
        padding: 6px 0;
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-size: 12px;
        letter-spacing: 0.05em;
        text-transform: lowercase;
        color: ${theme.colors.finalMuted};
        transition: color 0.2s ease;

        &::after {
            position: absolute;
            right: 0;
            bottom: 2px;
            left: 0;
            height: 1px;
            content: "";
            background: ${theme.colors.hudKeyword};
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.2s ease;
        }

        &:hover {
            color: ${theme.colors.hudKeyword};

            &::after {
                transform: scaleX(1);
            }
        }

        span {
            color: ${theme.colors.hudKeyword};
        }
    }
`;

const Reserved = styled.small`
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 13px;
    text-align: center;
    color: ${theme.colors.finalMuted};
`;

export const S = {Footer, Social, Reserved};
