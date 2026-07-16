export type NavigationItem = {
    label: string;
    href: string;
};

export const navigationItems: ReadonlyArray<NavigationItem> = [
    {label: "About", href: "#about"},
    {label: "Skills", href: "#skills"},
    {label: "Projects", href: "#projects"},
    {label: "Contacts", href: "#contacts"},
];
