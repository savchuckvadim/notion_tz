import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserById } from "../lib/getUserById";
import { IUser } from "../type/user.type";


export const getCurrentUserThunk = createAsyncThunk(
    "user/getCurrentUser",
    async (userId: number): Promise<IUser> => {
        const user = await getUserById(userId);
        return user;
    }
)


