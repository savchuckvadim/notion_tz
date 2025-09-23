'use client';
import { useTheme } from 'next-themes';
import { MoonStar, SunDim } from 'lucide-react';
import { ColorSchemePicker } from './ColorSchemePicker';


export const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };


    return (
        <div className="flex items-center gap-1 text-foreground">

            <button
                onClick={toggleTheme}
                className="hover:text-primary cursor-pointer transition-transform duration-300"
            >
                {theme === 'dark' ? (
                    <MoonStar size={20} />
                ) : (
                    <SunDim size={20} />
                )}
            </button>

            <ColorSchemePicker />
        </div>
    );
};
