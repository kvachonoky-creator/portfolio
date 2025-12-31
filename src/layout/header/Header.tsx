import {Container} from "../../components/container/Container.ts";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {Icons} from "../../components/icons/Icons.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/mobileMenu.tsx";
import * as React from "react";
import {S} from "./Header_Styles.ts"
import {useState} from "react";

export const Header: React.FC = () => {

    const menuTitle = ["About", "Project", "Contacts"]


    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    const [blurHeder, setBlurHeader] = useState(false);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            width < breakpoint
                ? window.scrollY > 700 ? setBlurHeader(true) : setBlurHeader(false)
                : window.scrollY > 50 ? setBlurHeader(true) : setBlurHeader(false)
        })
    })

    return (
        <S.Header style={blurHeder ? {backdropFilter: "blur(4px)", backgroundColor: "rgba(6,104,246,0.3)"} : undefined}>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <S.LogoLink href="#">
                        <Icons iconId={"logo"} width={"300px"} height={"15px"} viewBox={"0 0 300 15"}/>
                    </S.LogoLink>
                    {width < breakpoint ? <MobileMenu menuItem={menuTitle}/> :
                        <DesktopMenu menuItem={menuTitle}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
}