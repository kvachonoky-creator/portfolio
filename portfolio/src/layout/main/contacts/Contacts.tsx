import { SectionTitle } from "../../../components/sectionTitle/SectionTitle"
import styled from "styled-components";

export const Contacts = () => {
    return (
        <StyledContacts>
        <SectionTitle title={"Contact me"}/>
        <StyledForm>
            <Field/>
            <Field/>
            <Field as={"textarea"}/>
        </StyledForm>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
background-color: rgba(222, 25, 531, 1);
min-height: 50vh;
`

const StyledForm = styled.form`
max-width:400px;
width: 100%;
display:flex;
flex-direction: column;
align-items: center;
gap:24px;
`

const Field = styled.input`
`