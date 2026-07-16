import {useCallback, useEffect, useRef} from "react";
import type {PointerEvent as ReactPointerEvent} from "react";

export const usePointerGlow = () => {
    const animationFrame = useRef<number>();

    const onPointerMove = useCallback((event: ReactPointerEvent<HTMLElement>) => {
        const x = event.clientX;
        const y = event.clientY;

        if (animationFrame.current !== undefined) {
            cancelAnimationFrame(animationFrame.current);
        }

        animationFrame.current = requestAnimationFrame(() => {
            document.documentElement.style.setProperty("--glow-x", `${x}px`);
            document.documentElement.style.setProperty("--glow-y", `${y}px`);
            document.documentElement.style.setProperty("--glow-opacity", "1");
        });
    }, []);

    const onPointerLeave = useCallback(() => {
        document.documentElement.style.setProperty("--glow-opacity", "0");
    }, []);

    useEffect(() => () => {
        if (animationFrame.current !== undefined) {
            cancelAnimationFrame(animationFrame.current);
        }
    }, []);

    return {onPointerMove, onPointerLeave};
};
