import {AboutMe} from "./aboutMe/AboutMe.tsx"
import {Skills} from "./skills/Skills.tsx";
import {Projects} from "./projects/Projects.tsx"
import { Contacts } from "./contacts/Contacts.tsx";
import {Footer} from "../footer/Footer.tsx";

export const Main = () => {
    return (
        <>
            <AboutMe/>
            <Skills />
            <Projects/>
            <Contacts/>
            <Footer/>
        </>
    );
};

