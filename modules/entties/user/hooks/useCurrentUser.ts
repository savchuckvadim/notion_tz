import { useAppDispatch, useAppSelector } from "@/modules/app/model/hooks/redux";
import { IUser } from "../type/user.type";
import { updateCurrentUser } from "../lib/updateCurrentUser";


export const useCurrentUser = (): { user: IUser | null, updateCurrentUser: () => void } => {

    const selector = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    return {
        user: selector.current,
        updateCurrentUser: () => updateCurrentUser(dispatch),
    };
}

