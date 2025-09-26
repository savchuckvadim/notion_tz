import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTodosByUserId } from "../lib/getTodosByUserId";

export const fetchTodosThunk = createAsyncThunk(
    "todos/fetchTodos",
    async (userId: number) => {
        const todos = await getTodosByUserId(userId);
        return todos;
    }
)
