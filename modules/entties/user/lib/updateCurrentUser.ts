import { AppDispatch } from "@/modules/app/model/store";
import { getCurrentUserThunk } from "../model/UserThunk";

export const updateCurrentUser = async (dispatch: AppDispatch) => {
    const random = Math.floor(Math.random() * 10);
    const currentUserId = random;
    dispatch(getCurrentUserThunk(currentUserId));
}
