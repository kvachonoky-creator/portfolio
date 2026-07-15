import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";

const Contacts = styled.section`
    position: relative;
    padding: 120px 0;
    color: #fff;
    background: ${theme.colors.dark};

    h2 {
        color: #fff;
    }

    h2::before {
        color: #8da0ff;
    }
`;

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(360px, 1.15fr);
    gap: clamp(56px, 9vw, 128px);
    align-items: start;

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
    }
`;

const ContactIntro = styled.div`
    h3 {
        max-width: 520px;
        margin: 28px 0 24px;
        font-family: Roboto, sans-serif;
        font-size: clamp(32px, 4vw, 54px);
        line-height: 1.05;
        letter-spacing: -0.045em;
    }

    p {
        max-width: 500px;
        margin-bottom: 32px;
        font-size: 18px;
        line-height: 1.65;
        color: #aebbd0;
    }

`;

const Availability = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #aebbd0;

    span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${theme.colors.signal};
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;
    padding: clamp(24px, 4vw, 44px);
    border: 1px solid #34405c;
    border-radius: 8px;
    background: #121d39;
`;

const fieldStyles = `
    width: 100%;
    border: 0;
    border-bottom: 1px solid #52617e;
    border-radius: 0;
    color: #fff;
    background: transparent;
    outline: none;
`;

const Field = styled.input`
    ${fieldStyles}
    height: 48px;
    padding: 6px 0;

    &:focus {
        border-bottom-color: ${theme.colors.signal};
    }
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #aebbd0;
`;

const Textarea = styled.textarea`
    ${fieldStyles}
    min-height: 120px;
    padding: 14px 0;
    resize: vertical;

    &:focus {
        border-bottom-color: ${theme.colors.signal};
    }
`;

const FormFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-top: 8px;

    @media ${theme.media.mobile} {
        align-items: stretch;
        flex-direction: column;
    }
`;

const FormStatus = styled.span<{$status: "idle" | "sending" | "success" | "error"}>`
    min-height: 20px;
    font-size: 13px;
    color: ${({$status}) => $status === "error" ? "#ff9872" : "#aebbd0"};
`;

const Button = styled.button`
    min-width: 154px;
    min-height: 48px;
    padding: 10px 18px;
    border: 1px solid ${theme.colors.signal};
    border-radius: 4px;
    font-family: Raleway, sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${theme.colors.dark};
    background: ${theme.colors.signal};
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover:not(:disabled) {
        background: #ff8255;
        transform: translateY(-2px);
    }

    &:disabled {
        cursor: wait;
        opacity: 0.65;
    }
`;

export const S = {
    Contacts,
    ContactGrid,
    ContactIntro,
    Availability,
    Form,
    Field,
    Label,
    Textarea,
    FormFooter,
    FormStatus,
    Button,
};
