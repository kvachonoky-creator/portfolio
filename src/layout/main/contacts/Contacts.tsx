import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx"
import {Container} from "../../../components/container/Container.ts";
import {S} from "./Contacts_Style.ts"
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import React, {ElementRef, useRef, useState} from "react";


export const Contacts = () => {
    const form = useRef<ElementRef<'form'>>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return
        setStatus("sending");

        emailjs
            .sendForm('service_faknwqa', 'template_j59tynz', form.current, {
                publicKey: 'ZslYiiqbVnYMQzHyF',
            })
            .then(
                () => {
                    setStatus("success");
                    form.current?.reset();
                },
                () => {
                    setStatus("error");
                },
            );
    };

    const inputType: Array<
        {
            title: string
            type: string
            name: string
        }> = [
        {title: "Name", type: "text", name: "user_name"},
        {title: "Email", type: "email", name: "email"}
    ]

    return (
        <S.Contacts id="contacts">
            <Container>
                <SectionTitle title="Contact me"/>
                <Fade triggerOnce duration={450} fraction={0.1}>
                    <S.ContactGrid>
                        <S.ContactIntro>
                            <S.Availability><span/>Available for new projects</S.Availability>
                            <h3>Have a product that needs a careful frontend?</h3>
                            <p>Tell me what you’re building, what is already working, and where the interface needs help.</p>
                            <a href="mailto:yarek.dev@gmail.com">yarek.dev@gmail.com</a>
                        </S.ContactIntro>
                        <S.Form ref={form} onSubmit={sendEmail}>
                            {inputType.map((t) => {
                                return (
                                    <S.Label key={t.name}>{t.title}
                                        <S.Field required type={t.type} name={t.name} autoComplete={t.name === "email" ? "email" : "name"}/>
                                    </S.Label>
                                )
                            })}
                            <S.Label>Message
                                <S.Textarea required name="message"/>
                            </S.Label>
                            <S.FormFooter>
                                <S.FormStatus aria-live="polite" $status={status}>
                                    {status === "success" && "Message sent."}
                                    {status === "error" && "Message failed. Email me directly."}
                                </S.FormStatus>
                                <S.Button type="submit" disabled={status === "sending"}>
                                    {status === "sending" ? "Sending…" : "Send message"}
                                </S.Button>
                            </S.FormFooter>
                        </S.Form>
                    </S.ContactGrid>
                </Fade>
            </Container>
        </S.Contacts>
    )
};
