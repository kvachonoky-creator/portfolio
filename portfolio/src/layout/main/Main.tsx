import {AboutMe} from "./aboutMe/AboutMe.tsx"
import {Skills} from "./skills/Skills.tsx";
import {Projects} from "./projects/Projects.tsx"

export const Main = () => {
    return (
        <>
            <AboutMe/>
            <Skills />
            <Projects/>
        </>
    );
};

