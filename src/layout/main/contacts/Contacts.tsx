import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx"
import styled from "styled-components";


export const Contacts = () => {

    const inputType: Array<
        {
            name: string
            placeholder: string
            type: string
        }> = [
        {name: "Name", placeholder: "Name", type: "text"},
        {name: "Email", placeholder: "Email", type: "email"},
        {name: "Message", placeholder: "Message", type: "textarea"},
    ]

    return (
        <StyledContacts>
            <SectionTitle title={"Contact me"}/>
            <StyledForm>
                {inputType.map((t, i) => {
                    return (
                        <StyledLabel key={i}>{t.name}
                            <Field placeholder={t.placeholder} type={t.type}/></StyledLabel>
                    )
                })}
                <button type="submit">Send</button>
            </StyledForm>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`
const StyledLabel = styled.label`
`