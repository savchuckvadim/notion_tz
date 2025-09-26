import { delay } from "@/modules/shared/lib/utils/delay";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const initAppThunk = createAsyncThunk("app/appThunk", async () => {
    await delay(1500);
    const random = Math.floor(Math.random() * 100);
    const currentUserId = random;
    debugger
    return currentUserId;
});
