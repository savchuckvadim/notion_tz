'use client';

import { ThemeProvider } from "@/modules/shared/theme";


export function App({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>{
        children
    }</ThemeProvider>;
}