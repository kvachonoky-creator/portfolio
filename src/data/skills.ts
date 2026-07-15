import nextjsLogo from "../assets/img/nextjs.svg";
import muiLogo from "../assets/img/mui.svg";

export type SkillItem = {
    label: string;
    iconId?: string;
    asset?: string;
    color?: string;
};

export const skills: ReadonlyArray<SkillItem> = [
    {label: "HTML", iconId: "html"},
    {label: "CSS", iconId: "css"},
    {label: "Sass", iconId: "sass"},
    {label: "JavaScript", iconId: "js"},
    {label: "TypeScript", iconId: "typescript"},
    {label: "React", iconId: "react"},
    {label: "Redux", iconId: "redux"},
    {label: "Next.js", asset: nextjsLogo, color: "#000000"},
    {label: "MUI", asset: muiLogo, color: "#007FFF"},
    {label: "Git", iconId: "git"},
    {label: "GitHub", iconId: "github"},
    {label: "VS Code", iconId: "vsCode"},
];
