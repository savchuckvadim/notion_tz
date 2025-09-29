import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

            state.posts = action.payload.posts;
            state.todos = action.payload.todos;


        },

    },

})

export const statisticsReducer = statisticsSlice.reducer;
export const { setStatistics } = statisticsSlice.actions;
