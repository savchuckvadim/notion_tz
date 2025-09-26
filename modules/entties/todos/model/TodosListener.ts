import { isAnyOf, ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { fetchTodosThunk } from "./TodosThunk";
import { RootState } from "@/modules/app/model/store";
import { initAppThunk } from "@/modules/app/model/thunk/AppThunk";

export const setupTodosAppListener = (listenerMiddleware: ListenerMiddlewareInstance) => {
    listenerMiddleware.startListening({
        matcher: isAnyOf(
            initAppThunk.fulfilled
        ),
        effect: async (action, listenerApi) => {
            const { dispatch, getState } = listenerApi;
            const state = getState() as RootState;
            const app = state.app;
            debugger;
            if (app.isInitialized && !app.isLoading && app.currentUserId) {
                dispatch(fetchTodosThunk(app.currentUserId));
            }
        },
    });
}
