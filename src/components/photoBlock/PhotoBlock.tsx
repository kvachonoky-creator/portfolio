import photo from "../../assets/img/photo-optimized.webp"
import {S} from "./PhotoBlock_Styles.ts"
import React, {useState} from "react";

type DeveloperMode =
    | "react"
    | "typescript"
    | "ui";

const developerModes: ReadonlyArray<{id: DeveloperMode; label: string}> = [
    {id: "react", label: "React"},
    {id: "typescript", label: "TypeScript"},
    {id: "ui", label: "UI"},
];

const DeveloperSnippet = ({mode}: {mode: DeveloperMode}) => {
    if (mode === "react") {
        return (
            <>
                <S.CodeLine><S.CodeKeyword>const</S.CodeKeyword> [mode, setMode] =</S.CodeLine>
                <S.CodeLine>  useState&lt;<S.CodeType>DeveloperMode</S.CodeType>&gt;(<S.CodeString>&quot;react&quot;</S.CodeString>);</S.CodeLine>
            </>
        );
    }

    if (mode === "typescript") {
        return (
            <>
                <S.CodeLine><S.CodeKeyword>type</S.CodeKeyword> <S.CodeType>DeveloperMode</S.CodeType> =</S.CodeLine>
                <S.CodeLine>  | <S.CodeString>&quot;react&quot;</S.CodeString></S.CodeLine>
                <S.CodeLine>  | <S.CodeString>&quot;typescript&quot;</S.CodeString></S.CodeLine>
                <S.CodeLine>  | <S.CodeString>&quot;ui&quot;</S.CodeString>;</S.CodeLine>
            </>
        );
    }

    return (
        <>
            <S.CodeLine><S.CodeKeyword>const</S.CodeKeyword> {'{'}onPointerMove,</S.CodeLine>
            <S.CodeLine>  onPointerLeave{'}'} = usePointerGlow();</S.CodeLine>
        </>
    );
};

export const PhotoBlock: React.FC = () => {
    const [mode, setMode] = useState<DeveloperMode>("react");

    const selectModeByKeyboard = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
        let nextIndex: number | undefined;

        if (event.key === "ArrowRight") nextIndex = (index + 1) % developerModes.length;
        if (event.key === "ArrowLeft") nextIndex = (index - 1 + developerModes.length) % developerModes.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = developerModes.length - 1;

        if (nextIndex === undefined) return;

        event.preventDefault();
        const nextMode = developerModes[nextIndex];

        setMode(nextMode.id);
        requestAnimationFrame(() => document.getElementById(`developer-tab-${nextMode.id}`)?.focus());
    };

    return (
        <S.PhotoBlock>
            <S.ViewportBar>
                <S.WindowControls aria-hidden="true"><i/><i/><i/></S.WindowControls>
                <span>portrait.tsx</span>
                <S.LiveLabel>live viewport</S.LiveLabel>
            </S.ViewportBar>
            <S.PhotoCanvas>
                <S.PhotoGrid aria-hidden="true"/>
                <S.PhotoMask>
                    <S.Photo
                        src={photo}
                        alt="Yaroslau Kvachonak"
                        width={1391}
                        height={1907}
                        decoding="async"
                        fetchPriority="high"
                    />
                </S.PhotoMask>
            </S.PhotoCanvas>
            <S.DeveloperHud
                id={`developer-panel-${mode}`}
                role="tabpanel"
                aria-labelledby={`developer-tab-${mode}`}
                aria-live="polite"
            >
                <S.HudLabel>source / {mode}.tsx</S.HudLabel>
                <S.HudContent key={mode}>
                    <S.CodeBlock><DeveloperSnippet mode={mode}/></S.CodeBlock>
                </S.HudContent>
            </S.DeveloperHud>
            <S.ModeTabs role="tablist" aria-label="Developer mode">
                {developerModes.map((developerMode, index) => (
                    <S.ModeTab
                        id={`developer-tab-${developerMode.id}`}
                        key={developerMode.id}
                        type="button"
                        role="tab"
                        aria-selected={mode === developerMode.id}
                        aria-controls={`developer-panel-${developerMode.id}`}
                        tabIndex={mode === developerMode.id ? 0 : -1}
                        $isActive={mode === developerMode.id}
                        onClick={() => setMode(developerMode.id)}
                        onKeyDown={(event) => selectModeByKeyboard(event, index)}
                    >
                        {developerMode.label}
                    </S.ModeTab>
                ))}
            </S.ModeTabs>
        </S.PhotoBlock>
    );
};

