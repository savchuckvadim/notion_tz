"use client";

import { ThemeProvider } from "@/modules/shared/theme";

export function App({
    children,
    scheme,
}: {
    children: React.ReactNode;
    scheme?: any;
}) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
