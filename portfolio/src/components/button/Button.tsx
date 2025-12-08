import styled from "styled-components";

type ButtonProps = {
    title: string
}


export const Button = (props: ButtonProps) => {
    return (
        <ButtonStyled>
            {props.title}
        </ButtonStyled>
    );
};


const ButtonStyled = styled.button`
`