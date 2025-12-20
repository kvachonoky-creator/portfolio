import {AboutMe} from "./aboutMe/AboutMe.tsx"
import {Skills} from "./skills/Skills.tsx";
import {Projects} from "./projects/Projects.tsx"
import { Contacts } from "./contacts/Contacts.tsx";
import {Footer} from "../footer/Footer.tsx";
import React from "react";

export const Main :React.FC = () => {
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

