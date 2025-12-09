import { Button } from "../../components/button/Button";
import { Icons } from "../../components/icons/Icons";
import { SectionTitle } from "../../components/sectionTitle/SectionTitle"
import styled from "styled-components";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle title={"Contact me"} />
            <StyledForm>
                <Field placeholder="Name..." />
                <Field placeholder="Email..." />
                <Field placeholder="Message..." as={"textarea"} />
                <Button title={"Send"} />
            </StyledForm>
            <StyledSocial>
                <Icons iconId="tg" width="48px" height="48px" viewBox="0 0 24 24" />
                <Icons iconId="inst" width="48px" height="48px" viewBox="0 0 48 48" />
                <Icons iconId="mail" width="48px" height="48px" viewBox="0 0  48 48" />
            </StyledSocial>
            <StyledReserved>© 2025 Yaroslau Kvachonak, All Rights Reserved.</StyledReserved>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
min-height: 50vh;
display:flex;
flex-direction: column;
align-items: center;
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

const StyledSocial = styled.div`
display:flex;
gap: 24px;
`

const StyledReserved = styled.span`
`