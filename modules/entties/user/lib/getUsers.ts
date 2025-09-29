import { api } from "@/modules/shared/services";
import { IUser } from "../type/user.type";

export const getUsers = async (): Promise<IUser[]> => {
    const users = await api.getUsers() as IUser[];

    return users;
}
