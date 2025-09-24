'use client';
import React, { createContext, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export type ColorScheme =
    | 'default'
    | 'violet'
    | 'red'
    | 'beige'

export const ColorSchemes = [
    'default',
    'violet',
    'red',
    'beige',

] as const;

interface ColorContextValue {
    scheme: ColorScheme;
    setScheme: (s: ColorScheme) => void;
}

export const ColorContext = createContext<ColorContextValue | null>(null);

export const ThemeProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [scheme, setScheme] = useState<ColorScheme>('default');
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            const stored = localStorage.getItem('color-scheme') as ColorScheme;
            if (stored) setScheme(stored);
        }
    }, [isMounted]);

    useEffect(() => {
        
        if (isMounted) {
            const className = `${scheme}-${theme || 'dark'}`;
            document.documentElement.classList.remove(
                ...ColorSchemes.flatMap(s => [`${s}-light`, `${s}-dark`]),
            );
            document.documentElement.classList.add(className);
            localStorage.setItem('color-scheme', scheme);
        }
    }, [scheme, theme, isMounted]);

    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            enableColorScheme

        >
            <ColorContext.Provider value={{ scheme, setScheme }}>
                {children}
            </ColorContext.Provider>
        </NextThemesProvider>
    );
};
