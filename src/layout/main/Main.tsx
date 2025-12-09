import {AboutMe} from "./aboutMe/AboutMe.tsx"
import {Skills} from "./skills/Skills.tsx";
import {Projects} from "./projects/Projects.tsx"
import { Contacts } from "../footer/Contacts.tsx";

export const Main = () => {
    return (
        <>
            <AboutMe/>
            <Skills />
            <Projects/>
            <Contacts/>
        </>
    );
};

