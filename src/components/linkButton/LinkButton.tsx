import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type ButtonProps = {
    title: string
    type?: string
}


export const LinkButton = (props: ButtonProps) => {
    return (
        <ButtonStyled>
            {props.title}
        </ButtonStyled>
    );
};


const ButtonStyled = styled.a`
    border: 2px solid #25282b;
    border-radius: 8px;
    padding: 8px 24px;
    width: 117px;
    height: 43px;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: #25282b;
    transition: background-color 0.2s;
    
    &:hover {
    cursor: pointer;
        background-color: ${theme.colors.accent};
        border-color: ${theme.colors.accent};
}
`