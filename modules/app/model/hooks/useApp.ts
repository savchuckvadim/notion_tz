import { initAppThunk } from "../slice/AppThunk";
import { useAppDispatch, useAppSelector } from "./redux";
import { useEffect } from "react";

export const useApp = () => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector((state) => state.app);

    useEffect(() => {
        debugger
        if (!selector.isInitialized && !selector.isLoading) {
            dispatch(initAppThunk());
        }
    }, [selector.isInitialized, selector.isLoading]);

    return { ...selector, initAppThunk: () => dispatch(initAppThunk()) };
};
