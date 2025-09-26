"use client";

import { Preloader } from "@/modules/shared/ui";
import { useApp } from "../model/hooks/useApp";

export function App({
    children,
    scheme,
}: {
    children: React.ReactNode;
    scheme?: any;
}) {
    const { isInitialized, isLoading, currentUserId } = useApp();
    if (isLoading) {
        return <Preloader />
    }
    if (!isInitialized) {
        return <Preloader />
    }
    return <>{children}</>;
}
