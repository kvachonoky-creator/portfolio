import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const PhotoBlock = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 520px;
    overflow: hidden;
    border: 1px solid ${theme.colors.dark};
    border-radius: 8px;
    background: ${theme.colors.secondaryBG};
    box-shadow: 18px 18px 0 ${theme.colors.accentSoft};

    @media ${theme.media.projectStack} {
        order: -1;
        align-self: center;
        margin-top: 36px;
    }

    @media ${theme.media.mobile} {
        box-shadow: 10px 10px 0 ${theme.colors.accentSoft};
    }
`;

const ViewportBar = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    min-height: 46px;
    padding: 0 14px;
    border-bottom: 1px solid ${theme.colors.dark};
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 11px;
    color: ${theme.colors.textFont};
`;

const WindowControls = styled.span`
    display: flex;
    gap: 5px;

    i {
        display: block;
        width: 7px;
        height: 7px;
        border: 1px solid ${theme.colors.dark};
        border-radius: 50%;
    }

    i:first-child {
        background: ${theme.colors.signal};
    }
`;

const LiveLabel = styled.span`
    justify-self: end;
    color: ${theme.colors.accent};
`;

const PhotoCanvas = styled.div`
    position: relative;
    height: clamp(420px, 44vw, 570px);
    overflow: hidden;
    background: ${theme.colors.imageBG};
`;

const PhotoGrid = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-image:
        linear-gradient(${theme.colors.line} 1px, transparent 1px),
        linear-gradient(90deg, ${theme.colors.line} 1px, transparent 1px);
    background-size: 25% 25%;
`;

const PhotoMask = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
`;

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 17%;
    filter: saturate(0.82) contrast(1.03);
`;

const DeveloperHud = styled.div`
    position: absolute;
    right: 0;
    bottom: 50px;
    left: 0;
    z-index: 3;
    height: 112px;
    overflow: hidden;
    border-block: 1px solid ${theme.colors.hudBorder};
    color: ${theme.colors.finalText};
    background: ${theme.colors.hudBG};
    box-shadow: 0 -10px 28px ${theme.colors.cardShadow};
    backdrop-filter: blur(12px);

    @media ${theme.media.mobile} {
        position: relative;
        right: auto;
        bottom: auto;
        left: auto;
        height: 112px;
        border-width: 1px 0 0;
        border-color: ${theme.colors.dark};
        background: ${theme.colors.hudBG};
        box-shadow: none;
        backdrop-filter: none;
    }
`;

const HudLabel = styled.div`
    padding: 7px 14px 6px;
    border-bottom: 1px solid ${theme.colors.hudBorder};
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 9px;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: ${theme.colors.hudKeyword};
`;

const HudContent = styled.div`
    overflow: hidden;
    animation: hud-enter 0.24s ease both;

    @keyframes hud-enter {
        from {
            opacity: 0;
            transform: translateY(6px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const CodeBlock = styled.pre`
    margin: 0;
    padding: 8px 14px;
    overflow-x: auto;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 11px;
    line-height: 1.4;
    color: ${theme.colors.finalText};
`;

const CodeLine = styled.span`
    display: block;
`;

const CodeKeyword = styled.span`
    color: ${theme.colors.hudKeyword};
`;

const CodeType = styled.span`
    color: ${theme.colors.hudType};
`;

const CodeString = styled.span`
    color: ${theme.colors.hudString};
`;

const ModeTabs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 50px;
    border-top: 1px solid ${theme.colors.dark};
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
`;

const ModeTab = styled.button<{$isActive: boolean}>`
    position: relative;
    border: 0;
    border-right: 1px solid ${theme.colors.line};
    color: ${({$isActive}) => $isActive ? theme.colors.accent : theme.colors.textFont};
    background: ${({$isActive}) => $isActive ? theme.colors.accentSoft : theme.colors.secondaryBG};
    cursor: pointer;
    transition: color 0.2s ease, background-color 0.2s ease;

    &:last-child {
        border-right: 0;
    }

    &::after {
        position: absolute;
        right: 12px;
        bottom: 0;
        left: 12px;
        height: 2px;
        content: "";
        background: ${theme.colors.signal};
        transform: scaleX(${({$isActive}) => $isActive ? 1 : 0});
        transform-origin: left;
        transition: transform 0.2s ease;
    }

    &:hover {
        color: ${theme.colors.accent};
        background: ${theme.colors.accentSoft};
    }
`;

export const S = {
    PhotoBlock,
    ViewportBar,
    WindowControls,
    LiveLabel,
    PhotoCanvas,
    PhotoGrid,
    PhotoMask,
    Photo,
    DeveloperHud,
    HudLabel,
    HudContent,
    CodeBlock,
    CodeLine,
    CodeKeyword,
    CodeType,
    CodeString,
    ModeTabs,
    ModeTab,
};
