import { IUser } from "../type/user.type";
import { getUsers } from "./getUsers";

export const getUserById = async (id: number): Promise<IUser> => {
    const users = await getUsers();
    const user = users.find((user: IUser) => user.id === id) as IUser;

    return user;
}
