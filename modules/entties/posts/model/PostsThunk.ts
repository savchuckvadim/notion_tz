import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsByUserId} from "../lib/getPosts";


export const fetchPostsThunk = createAsyncThunk(
    "posts/fetchPosts",
    async (userId: number) => {
        const result = await getPostsByUserId(userId);
        return result;
    });


