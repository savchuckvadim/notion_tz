import { isAnyOf, ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { initAppThunk } from "@/modules/app/model/thunk/AppThunk";
import { getCurrentUserThunk } from "./UserThunk";
import { RootState } from "@/modules/app/model/store";


export const setupUserAppListener = (listenerMiddleware: ListenerMiddlewareInstance) => {
    listenerMiddleware.startListening({
        matcher: isAnyOf(
            initAppThunk.fulfilled
        ),
        effect: async (action, listenerApi) => {
            const { dispatch, getState } = listenerApi;
            const state = getState() as RootState;
            const app = state.app;
            if (app.isInitialized && !app.isLoading && app.currentUserId) {
                dispatch(getCurrentUserThunk(app.currentUserId));
            }
        },
    });
}
