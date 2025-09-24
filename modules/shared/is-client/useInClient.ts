'use client';

import { useEffect, useState } from "react";

export const useInClient = (): boolean => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return isClient;
};
