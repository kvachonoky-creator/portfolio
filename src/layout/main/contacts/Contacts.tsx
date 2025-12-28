import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx"
import {Container} from "../../../components/container/Container.ts";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {S} from "./Contacts_Style.ts"
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";


export const Contacts = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();
        
        if(!form.current) return

        emailjs
            .sendForm('service_faknwqa', 'template_j59tynz', form.current, {
                publicKey: 'ZslYiiqbVnYMQzHyF',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    const inputType: Array<
        {
            title: string
            type: string
            name: string
        }> = [
        {title: "Name", type: "text", name: "user_name"},
        {title: "Subject", type: "text", name: "subject"},
        {title: "Email", type: "email", name: "email"}
    ]

    return (
        <S.Contacts id="Contacts">
            <Container>
                <Fade cascade={true} delay={350}>
                    <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                        <SectionTitle title={"Contact me"}/>
                        <S.Form ref={form} onSubmit={sendEmail}>
                            {inputType.map((t, i) => {
                                return (
                                    <S.Label key={i}>{t.title}
                                        <S.Field required type={t.type} name={t.name}/></S.Label>
                                )
                            })}
                            <S.Label> Message
                                <S.Textarea required name="message"/>
                            </S.Label>
                            <S.Button type="submit">Send</S.Button>
                        </S.Form>
                    </FlexWrapper>
                </Fade>
            </Container>
        </S.Contacts>
    )
}

