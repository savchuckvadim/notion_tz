import { delay } from "@/modules/shared/lib/utils/delay";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const initAppThunk = createAsyncThunk("app/appThunk", async () => {
    await delay(1000);
    return true;
});
