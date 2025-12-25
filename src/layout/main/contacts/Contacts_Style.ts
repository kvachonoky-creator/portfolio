import {theme} from "../../../styles/Theme.ts";
import styled from "styled-components";

const Contacts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 55px 0;
    position: relative;
    background-color: ${theme.colors.primaryBG};
`

const Form = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

const Field = styled.input`
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    padding: 4px 8px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 18px;
`
const Label = styled.label`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 8px;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #25282b;
`

const Textarea = styled.textarea`
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    max-width: 400px;
    width: 100%;
    height: 160px;
    resize: none;
    padding: 4px 8px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 18px;
`

const Button = styled.button`
    border-radius: 8px;
    padding: 8px 24px;
    width: 89px;
    height: 43px;
    border: none;
    background-color: ${theme.colors.accent};
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: #25282b;
    cursor: pointer;
    align-self: end;
    transition: transform 0.2s;
    
    &:hover {
        transform: translateY(-5px);
    }
`




export const S = {
    Contacts,
    Form,
    Field,
    Label,
    Textarea,
    Button,
}