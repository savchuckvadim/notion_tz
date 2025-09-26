import {  useAppSelector } from "@/modules/app/model/hooks/redux";
import { IUser } from "../type/user.type";

export const useCurrentUser = (): IUser | null => {

    const selector = useAppSelector((state) => state.user);
    return selector.current;
}

