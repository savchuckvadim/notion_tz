import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserById } from "../lib/getUserById";
import { IUser } from "../type/user.type";
import { AppDispatch } from "@/modules/app/model/store";

export const getCurrentUserThunk = createAsyncThunk(
    "user/getCurrentUser",
    async (userId: number): Promise<IUser> => {
        const user = await getUserById(userId);
        return user;
    }
)


