import { createSlice } from "@reduxjs/toolkit";
import { initAppThunk } from "./AppThunk";

const initialState = {
    isLoading: false,
    isInitialized: false,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(initAppThunk.fulfilled, (state, action) => {
            state.isInitialized = action.payload;
            state.isLoading = false;
        });
        builder.addCase(initAppThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(initAppThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isInitialized = false;
        });
    },
});

export const appReducer = appSlice.reducer;
