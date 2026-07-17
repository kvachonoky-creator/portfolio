import {useEffect, useState} from "react";
import {navigationItems} from "../data/navigation.ts";

export const useHeaderScroll = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeHref, setActiveHref] = useState(navigationItems[0].href);

    useEffect(() => {
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

    return {isScrolled, activeHref};
};
