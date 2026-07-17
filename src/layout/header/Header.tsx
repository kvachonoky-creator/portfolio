import {Container} from "../../components/container/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/mobileMenu.tsx";
import {S} from "./Header_Styles.ts"
import {navigationItems} from "../../data/navigation.ts";
import type {ThemeMode} from "../../styles/Theme.ts";
import {useHeaderScroll} from "../../hooks/useHeaderScroll.ts";
import {ThemeToggle} from "./themeToggle/ThemeToggle.tsx";

type HeaderProps = {
    themeMode: ThemeMode;
    onThemeToggle: () => void;
};

export const Header = ({themeMode, onThemeToggle}: HeaderProps) => {
    const {isScrolled, activeHref} = useHeaderScroll();

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
                        <ThemeToggle mode={themeMode} onToggle={onThemeToggle}/>
                        <MobileMenu menuItems={navigationItems} activeHref={activeHref}/>
                    </S.HeaderActions>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
}
