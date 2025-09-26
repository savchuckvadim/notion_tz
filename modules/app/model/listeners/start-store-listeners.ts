import { setupPostsAppListener, setupUserAppListener } from "@/modules/entties";
import { setupTodosAppListener } from "@/modules/entties/todos";
import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { setupStatisticsListener } from "@/modules/features";

export function startStoreListeners(
    listenerMiddleware: ListenerMiddlewareInstance,
) {
    setupPostsAppListener(listenerMiddleware);
    setupUserAppListener(listenerMiddleware);
    setupTodosAppListener(listenerMiddleware);
    setupStatisticsListener(listenerMiddleware);
}
