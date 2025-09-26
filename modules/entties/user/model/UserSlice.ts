import { createSlice } from "@reduxjs/toolkit"
import { getCurrentUserThunk } from "./UserThunk";
import { IUser } from "../type/user.type";

export interface IUserState {
    users: IUser[];
    current: IUser | null;
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}
const initialState: IUserState = {
    users: [],
    current: null,
    isLoading: false,
    isError: false,
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCurrentUserThunk.fulfilled, (state, action) => {
            state.current = action.payload;
        });
        builder.addCase(getCurrentUserThunk.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCurrentUserThunk.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.error = "Error fetching user";
        });
    },
})

export const userReducer = userSlice.reducer;
