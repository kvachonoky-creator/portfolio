import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx"
import {Container} from "../../../components/container/Container.ts";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {S} from "./Contacts_Style.ts"
import {Fade} from "react-awesome-reveal";


export const Contacts = () => {

    const inputType: Array<
        {
            name: string
            type: string
        }> = [
        {name: "Name", type: "text"},
        {name: "Email", type: "email"}
    ]

    return (
        <S.Contacts id="Contacts">
            <Container>
                <Fade cascade={true} delay={350}>
                    <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                        <SectionTitle title={"Contact me"}/>
                        <S.Form>
                            {inputType.map((t, i) => {
                                return (
                                    <S.Label key={i}>{t.name}
                                        <S.Field type={t.type}/></S.Label>
                                )
                            })}
                            <S.Label> Message
                                <S.Textarea/>
                            </S.Label>
                            <S.Button type="submit">Send</S.Button>
                        </S.Form>
                    </FlexWrapper>
                </Fade>
            </Container>
        </S.Contacts>
    )
}

