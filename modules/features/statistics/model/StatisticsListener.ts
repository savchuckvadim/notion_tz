import { RootState } from "@/modules/app/model/store";
import { fetchPostsThunk } from "@/modules/entties/posts/model/PostsThunk";
import { fetchTodosThunk } from "@/modules/entties/todos/model/TodosThunk";
import { isAnyOf, ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { getStatistics } from "../lib/getStatistics";
import { setStatistics } from "./StatisticsSlice";

export const setupStatisticsListener = (listenerMiddleware: ListenerMiddlewareInstance) => {
    listenerMiddleware.startListening({
        matcher: isAnyOf(
            fetchPostsThunk.fulfilled,
            fetchTodosThunk.fulfilled,
        ),
        effect: async (action, listenerApi) => {
            const { dispatch, getState } = listenerApi;
            const state = getState() as RootState;
            const user = state.user.current;
            const posts = state.posts.posts;
            const todos = state.todos.todos;
            const statistics = getStatistics(posts, todos);
            debugger;
            dispatch(
                setStatistics(statistics)
            );
        },
    });
}
