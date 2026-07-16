import {Container} from "../../components/container/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/mobileMenu.tsx";
import * as React from "react";
import {S} from "./Header_Styles.ts"
import {navigationItems} from "../../data/navigation.ts";
import type {ThemeMode} from "../../styles/Theme.ts";

type HeaderProps = {
    themeMode: ThemeMode;
    onThemeToggle: () => void;
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

export const Header: React.FC<HeaderProps> = ({themeMode, onThemeToggle}) => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [activeHref, setActiveHref] = React.useState(navigationItems[0].href);

    React.useEffect(() => {
        let animationFrame: number | undefined;

        const updateHeader = () => {
            setIsScrolled(window.scrollY > 24);

            const marker = window.scrollY + window.innerHeight * 0.35;
            let nextHref = navigationItems[0].href;

            navigationItems.forEach(({href}) => {
                const section = document.querySelector<HTMLElement>(href);

                if (section && section.offsetTop <= marker) {
                    nextHref = href;
                }
            });

            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
                nextHref = navigationItems[navigationItems.length - 1].href;
            }

            setActiveHref((currentHref) => currentHref === nextHref ? currentHref : nextHref);
            animationFrame = undefined;
        };

        const requestUpdate = () => {
            if (animationFrame === undefined) {
                animationFrame = requestAnimationFrame(updateHeader);
            }
        };

        updateHeader();
        window.addEventListener("scroll", requestUpdate, {passive: true});
        window.addEventListener("resize", requestUpdate);

        return () => {
            window.removeEventListener("scroll", requestUpdate);
            window.removeEventListener("resize", requestUpdate);

            if (animationFrame !== undefined) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, []);

    return (
        <S.Header $isScrolled={isScrolled}>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <S.LogoLink href="#about" aria-label="Go to the About section">
                        <S.LogoMark aria-hidden="true">YK</S.LogoMark>
                        <S.LogoName>Yaroslau Kvachonak</S.LogoName>
                    </S.LogoLink>
                    <S.HeaderActions>
                        <DesktopMenu menuItems={navigationItems} activeHref={activeHref}/>
                        <S.CvLink
                            href="/yaroslav-kvachonak-cv.pdf"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Open CV as PDF"
                        >
                            CV <span aria-hidden="true">↗</span>
                        </S.CvLink>
                        <S.ThemeToggle
                            type="button"
                            onClick={onThemeToggle}
                            aria-label={`Switch to ${themeMode === "light" ? "dark" : "light"} theme`}
                            title={`Switch to ${themeMode === "light" ? "dark" : "light"} theme`}
                        >
                            <ThemeIcon mode={themeMode}/>
                            <S.ThemeLabel>theme: {themeMode}</S.ThemeLabel>
                        </S.ThemeToggle>
                        <MobileMenu menuItems={navigationItems} activeHref={activeHref}/>
                    </S.HeaderActions>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
}
