export type SkillItem = {
    label: string;
    code: string;
};

export type SkillGroup = {
    label: string;
    skills: ReadonlyArray<SkillItem>;
};

export const skillGroups: ReadonlyArray<SkillGroup> = [
    {
        label: "Core",
        skills: [
            {label: "JavaScript", code: "JS"},
            {label: "TypeScript", code: "TS"},
            {label: "React", code: "RE"},
            {label: "Next.js", code: "NX"},
        ],
    },
    {
        label: "State & data",
        skills: [
            {label: "Redux", code: "RDX"},
            {label: "Zustand", code: "ZS"},
            {label: "TanStack Query", code: "TQ"},
            {label: "React Hook Form", code: "RHF"},
        ],
    },
    {
        label: "UI",
        skills: [
            {label: "MUI", code: "MUI"},
            {label: "Sass", code: "SCSS"},
        ],
    },
    {
        label: "Workflow",
        skills: [
            {label: "Git", code: "GIT"},
            {label: "GitHub", code: "GH"},
        ],
    },
];
