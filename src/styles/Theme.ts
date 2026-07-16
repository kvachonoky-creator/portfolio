export type ThemeMode = "light" | "dark";

export type AppTheme = {
    mode: ThemeMode;
    colors: {
        primaryBG: string;
        secondaryBG: string;
        accent: string;
        signal: string;
        titleFont: string;
        textFont: string;
        line: string;
        frame: string;
        headerBG: string;
        menuBG: string;
        gridBase: string;
        gridActive: string;
        accentSoft: string;
        signalSoft: string;
        imageBG: string;
        cardShadow: string;
        finalBG: string;
        finalSurface: string;
        finalLine: string;
        finalText: string;
        finalMuted: string;
        hudBG: string;
        hudBorder: string;
        hudKeyword: string;
        hudType: string;
        hudString: string;
    };
};

const sharedFinal = {
    finalBG: "#04101C",
    finalSurface: "#0D2436",
    finalLine: "#29485A",
    finalText: "#E7F5F8",
    finalMuted: "#90ADBA",
    hudBG: "rgba(7, 23, 38, 0.94)",
    hudBorder: "rgba(144, 173, 186, 0.22)",
    hudKeyword: "#61CBDA",
    hudType: "#A7DDE5",
    hudString: "#FF8468",
};

export const themes: Record<ThemeMode, AppTheme> = {
    light: {
        mode: "light",
        colors: {
            primaryBG: "#EAF3F7",
            secondaryBG: "#F8FCFD",
            accent: "#087F96",
            signal: "#E86649",
            titleFont: "#102A38",
            textFont: "#607A88",
            line: "#C7DBE3",
            frame: "#102A38",
            headerBG: "rgba(234, 243, 247, 0.9)",
            menuBG: "rgba(234, 243, 247, 0.98)",
            gridBase: "rgba(8, 127, 150, 0.045)",
            gridActive: "rgba(8, 127, 150, 0.15)",
            accentSoft: "rgba(8, 127, 150, 0.09)",
            signalSoft: "rgba(232, 102, 73, 0.16)",
            imageBG: "#D9E8ED",
            cardShadow: "rgba(7, 23, 38, 0.08)",
            ...sharedFinal,
        },
    },
    dark: {
        mode: "dark",
        colors: {
            primaryBG: "#071726",
            secondaryBG: "#0D2436",
            accent: "#61CBDA",
            signal: "#FF8468",
            titleFont: "#E7F5F8",
            textFont: "#90ADBA",
            line: "#29485A",
            frame: "#3A6173",
            headerBG: "rgba(7, 23, 38, 0.92)",
            menuBG: "rgba(7, 23, 38, 0.98)",
            gridBase: "rgba(97, 203, 218, 0.035)",
            gridActive: "rgba(97, 203, 218, 0.105)",
            accentSoft: "rgba(97, 203, 218, 0.1)",
            signalSoft: "rgba(255, 132, 104, 0.17)",
            imageBG: "#102D40",
            cardShadow: "rgba(0, 0, 0, 0.24)",
            ...sharedFinal,
        },
    },
};

export const theme = {
    colors: {
        primaryBG: "var(--color-primary-bg)",
        secondaryBG: "var(--color-secondary-bg)",
        accent: "var(--color-accent)",
        signal: "var(--color-signal)",
        titleFont: "var(--color-title-font)",
        textFont: "var(--color-text-font)",
        line: "var(--color-line)",
        dark: "var(--color-frame)",
        frame: "var(--color-frame)",
        headerBG: "var(--color-header-bg)",
        menuBG: "var(--color-menu-bg)",
        gridBase: "var(--color-grid-base)",
        gridActive: "var(--color-grid-active)",
        accentSoft: "var(--color-accent-soft)",
        signalSoft: "var(--color-signal-soft)",
        imageBG: "var(--color-image-bg)",
        cardShadow: "var(--color-card-shadow)",
        finalBG: "var(--color-final-bg)",
        finalSurface: "var(--color-final-surface)",
        finalLine: "var(--color-final-line)",
        finalText: "var(--color-final-text)",
        finalMuted: "var(--color-final-muted)",
        hudBG: "var(--color-hud-bg)",
        hudBorder: "var(--color-hud-border)",
        hudKeyword: "var(--color-hud-keyword)",
        hudType: "var(--color-hud-type)",
        hudString: "var(--color-hud-string)",
    },

    media: {
        projectStack: "screen and (max-width: 899px)",
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 576px)",
    },
};
