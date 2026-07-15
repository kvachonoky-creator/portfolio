import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const PhotoBlock = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 520px;
    border: 1px solid ${theme.colors.dark};
    border-radius: 8px;
    background: ${theme.colors.secondaryBG};
    box-shadow: 18px 18px 0 rgba(49, 84, 245, 0.15);
    transform: rotate(1.25deg);

    @media ${theme.media.projectStack} {
        order: -1;
        align-self: center;
        margin-top: 36px;
    }

    @media ${theme.media.mobile} {
        box-shadow: 10px 10px 0 rgba(49, 84, 245, 0.15);
        transform: none;
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
    background: #dce4f0;
`;

const PhotoGrid = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background-image:
        linear-gradient(rgba(12, 21, 48, 0.13) 1px, transparent 1px),
        linear-gradient(90deg, rgba(12, 21, 48, 0.13) 1px, transparent 1px);
    background-size: 25% 25%;
`;

const PhotoMask = styled.div`
    position: absolute;
    inset: 0;
    overflow: hidden;
`;

const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 17%;
    filter: saturate(0.82) contrast(1.03);
`;

const AxisLabel = styled.span<{$side: "top" | "left"}>`
    position: absolute;
    z-index: 2;
    ${({$side}) => $side === "top" ? "top: 12px; right: 14px;" : "bottom: 12px; left: 14px;"}
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid ${theme.colors.dark};
    border-radius: 50%;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 11px;
    color: ${theme.colors.dark};
    background: rgba(251, 252, 254, 0.82);
`;

const Breakpoints = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 44px;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 10px;
    color: ${theme.colors.textFont};

    span {
        display: flex;
        align-items: center;
        padding-left: 12px;
        border-right: 1px solid ${theme.colors.line};
    }

    span:last-child {
        justify-content: flex-end;
        padding-right: 12px;
        border-right: 0;
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
    AxisLabel,
    Breakpoints,
};
