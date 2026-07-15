import {Container} from "../../components/container/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/mobileMenu.tsx";
import * as React from "react";
import {S} from "./Header_Styles.ts"
import {navigationItems} from "../../data/navigation.ts";

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);

        handleScroll();
        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <S.Header $isScrolled={isScrolled}>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <S.LogoLink href="#about" aria-label="Go to the About section">
                        <S.LogoMark aria-hidden="true">YK</S.LogoMark>
                        <S.LogoName>Yaroslau Kvachonak</S.LogoName>
                    </S.LogoLink>
                    <DesktopMenu menuItems={navigationItems}/>
                    <MobileMenu menuItems={navigationItems}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
}
