import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITodo } from "../type/todo.type";
import { fetchTodosThunk } from "./TodosThunk";

export interface ITodosState {
    todos: ITodo[];
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}


const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
    error: null,
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodosThunk.fulfilled, (state: ITodosState, action: PayloadAction<ITodo[]>) => {
            state.todos = action.payload;
        });
        builder.addCase(fetchTodosThunk.pending, (state: ITodosState) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodosThunk.rejected, (state: ITodosState) => {
            state.isLoading = false;
            state.isError = true;
            state.error = "Error fetching todos";
        });
    },
})

export const todosReducer = todosSlice.reducer;
