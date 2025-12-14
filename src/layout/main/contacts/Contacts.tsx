import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx"
import styled from "styled-components";
import {Container} from "../../../components/container/Container.ts";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";


export const Contacts = () => {

    const inputType: Array<
        {
            name: string
            placeholder: string
            type: string
        }> = [
        {name: "Name", type: "text"},
        {name: "Email", type: "email"}
    ]

    return (
        <StyledContacts id="Contacts">
            <Container>
                <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                    <SectionTitle title={"Contact me"}/>
                    <StyledForm>
                        {inputType.map((t, i) => {
                            return (
                                <StyledLabel key={i}>{t.name}
                                    <Field type={t.type}/></StyledLabel>
                            )
                        })}
                        <StyledLabel> Message
                            <StyledTextarea/>
                        </StyledLabel>
                        <StyledButton type="submit">Send</StyledButton>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 56px;

    h2 {
        margin-bottom: 56px;
    }
`

const StyledForm = styled.form`
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
const StyledLabel = styled.label`
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

const StyledTextarea = styled.textarea`
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    width: 400px;
    height: 160px;
    resize: none;
    padding: 4px 8px;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 18px;
`

const StyledButton = styled.button`
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
    
    &:active {
        transform: scale(0.9);
    }
`