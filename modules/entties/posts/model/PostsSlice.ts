import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPost } from "../type/posts.type"
import { fetchPostsThunk } from "./PostsThunk";

export interface IPostsState {
    posts: IPost[];
    current: IPost | null;
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}

const intitialState: IPostsState = {
    posts: [],
    current: null,
    isLoading: false,
    isError: false,
    error: null,
}

const postsSlice = createSlice({
    name: "posts",
    initialState: intitialState as IPostsState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostsThunk.fulfilled, (state: IPostsState, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        });
        builder.addCase(fetchPostsThunk.pending, (state: IPostsState) => {
            state.isLoading = true;
            state.isError = false;
            state.error = null;
        });
        builder.addCase(fetchPostsThunk.rejected, (state: IPostsState) => {
            state.current = null;
            state.isLoading = false;
            state.isError = true;
            state.error = "Error fetching posts";
        });

    },
})

export const postsReducer = postsSlice.reducer;
