"use client";

import { ColorSchemePicker } from "./ColorSchemePicker";
import { useColorScheme } from "../../hook/useColorScheme";
import { ColorScheme } from "../../provider/Theme";
import { useCallback } from "react";

export const ThemeToggler = () => {

    const { scheme, setScheme } = useColorScheme();

    const memoizedsetScheme = useCallback(
        (scheme: ColorScheme) => {

            setScheme(scheme);
        },
        [setScheme],
    );

    return (
        <div className="flex items-center gap-1 text-foreground">


            <ColorSchemePicker scheme={scheme} setScheme={memoizedsetScheme} />
        </div>
    );
};
