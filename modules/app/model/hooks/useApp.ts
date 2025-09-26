"use client";
import { useInClient } from "@/modules/shared/is-client/useInClient";
import { initAppThunk } from "../thunk/AppThunk";
import { useAppDispatch, useAppSelector } from "./redux";
import { useEffect } from "react";
import { store } from "../store";

export const useApp = () => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector((state) => state.app);
    const isClient = useInClient();

    useEffect(() => {
        if (isClient) {

            if (typeof window !== 'undefined') {

                (window as any).store = store;
            }
        }

    }, [isClient]);

    useEffect(() => {

        if (isClient && !selector.isInitialized && !selector.isLoading) {
            dispatch(initAppThunk());
        }
    }, [isClient, selector.isInitialized, selector.isLoading]);

    return {
        ...selector,

        initAppThunk: () => dispatch(initAppThunk())
    };
};
