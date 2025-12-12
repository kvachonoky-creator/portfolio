import styled from "styled-components";

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
`