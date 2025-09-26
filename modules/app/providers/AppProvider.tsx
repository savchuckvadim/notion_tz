"use client";
import { Provider } from "react-redux";
import { store } from "../model/store";
import { App } from "../ui/App";
import { ThemeProvider } from "@/modules/shared/ui/theme";
import { useInClient } from "@/modules/shared/is-client/useInClient";

export function AppProvider({ children }: { children: React.ReactNode }) {
    const isClient = useInClient();
    return (
        <Provider store={store}>
            <ThemeProvider>
                <App>{children}</App>
            </ThemeProvider>
        </Provider>
    );
}
