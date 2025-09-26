import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPostsThunk } from "@/modules/entties/posts/model/PostsThunk";
import { fetchTodosThunk } from "@/modules/entties/todos/model/TodosThunk";
import { getStatistics } from "../lib/getStatistics";

const initialState: IStatisticsState = {
    posts: 0,
    todos: 0,
}

export interface IStatisticsState {
    posts: number;
    todos: number;
}

const statisticsSlice = createSlice({
    name: "statistics",
    initialState,
    reducers: {
        setStatistics: (state: IStatisticsState, action: PayloadAction<IStatisticsState>) => {
            debugger;
            state.posts = action.payload.posts;
            state.todos = action.payload.todos;


        },

    },

})

export const statisticsReducer = statisticsSlice.reducer;
export const { setStatistics } = statisticsSlice.actions;
