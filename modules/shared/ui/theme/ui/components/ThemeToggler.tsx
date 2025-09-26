"use client";
import { useTheme } from "next-themes";
import { MoonStar, SunDim } from "lucide-react";
import { ColorSchemePicker } from "./ColorSchemePicker";
import { useColorScheme } from "../../hook/useColorScheme";
import { ColorScheme } from "../../provider/Theme";
import { useCallback } from "react";

export const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const { scheme, setScheme } = useColorScheme();
    const toggleTheme = () => {
        debugger;
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const memoizedsetScheme = useCallback(
        (scheme: ColorScheme) => {
            debugger;
            setScheme(scheme);
        },
        [setScheme],
    );
    debugger;
    return (
        <div className="flex items-center gap-1 text-foreground">
            <button
                onClick={toggleTheme}
                className="hover:text-primary cursor-pointer transition-transform duration-300"
            >
                {theme === "dark" ? (
                    <MoonStar size={20} />
                ) : (
                    <SunDim size={20} />
                )}
            </button>

            <ColorSchemePicker scheme={scheme} setScheme={memoizedsetScheme} />
        </div>
    );
};
