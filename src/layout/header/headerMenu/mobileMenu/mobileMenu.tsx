import {S} from "../HeaderMenu_Styles.ts"
import {Menu, MenuProps} from "../menu/Menu.tsx";
import React, {useEffect, useState} from "react";


export const MobileMenu: React.FC<MenuProps> = ({menuItems, activeHref}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);


    return (
        <S.MobileMenu aria-label="Mobile navigation">
            <S.BurgerButton
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation-popup"
            >
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup
                id="mobile-navigation-popup"
                isOpen={isOpen}
                aria-hidden={!isOpen}
                onClick={(event) => {
                    if (event.target === event.currentTarget) setIsOpen(false);
                }}
            >
                <Menu menuItems={menuItems} activeHref={activeHref} onItemClick={() => setIsOpen(false)}/>
                <S.CvLink
                    href="/yaroslav-kvachonak-cv.pdf"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open CV as PDF"
                    onClick={() => setIsOpen(false)}
                >
                    CV <span aria-hidden="true">↗</span>
                </S.CvLink>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

