import { delay } from "@/modules/shared/lib/utils/delay";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const initAppThunk = createAsyncThunk("app/appThunk", async () => {

    await delay(1500);
    const random = Math.floor(Math.random() * 10);
    const currentUserId = random;

    return currentUserId;
});
