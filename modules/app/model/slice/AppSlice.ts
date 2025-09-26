import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initAppThunk } from "./AppThunk";

const initialState = {
    isLoading: false,
    isInitialized: false,
    currentUserId: null as number | null,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(initAppThunk.fulfilled, (state, action: PayloadAction<number>) => {
            state.currentUserId = action.payload;
            state.isInitialized = true;
            state.isLoading = false;
            debugger
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
