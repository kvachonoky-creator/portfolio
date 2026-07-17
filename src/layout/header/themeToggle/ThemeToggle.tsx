import type {ThemeMode} from "../../../styles/Theme.ts";
import {S} from "./ThemeToggle_Styles.ts";

type ThemeToggleProps = {
    mode: ThemeMode;
    onToggle: () => void;
};

const ThemeIcon = ({mode}: {mode: ThemeMode}) => mode === "light" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/>
    </svg>
) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z"/>
    </svg>
);

export const ThemeToggle = ({mode, onToggle}: ThemeToggleProps) => {
    const nextMode = mode === "light" ? "dark" : "light";

    return (
        <S.ThemeToggle
            type="button"
            onClick={onToggle}
            aria-label={`Switch to ${nextMode} theme`}
            title={`Switch to ${nextMode} theme`}
        >
            <ThemeIcon mode={mode}/>
            <S.ThemeLabel>theme: {mode}</S.ThemeLabel>
        </S.ThemeToggle>
    );
};
