import { initAppThunk } from "@/modules/app/model/slice/AppThunk";
import { RootState } from "@/modules/app/model/store";
import { isAnyOf, ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { fetchPostsThunk } from "./PostsThunk";

// export const clientTypeListener = createListenerMiddleware();
export function setupClientTypeListener(
    listenerMiddleware: ListenerMiddlewareInstance,
) {
    listenerMiddleware.startListening({
        matcher: isAnyOf(
            initAppThunk.fulfilled
        ),
        effect: async (action, listenerApi) => {
            const { dispatch, getState } = listenerApi;
            const state = getState() as RootState;
            const app = state.app;
            if (app.isInitialized && !app.isLoading && app.currentUserId) {
                dispatch(fetchPostsThunk(app.currentUserId));
            }

        },
    });
}
