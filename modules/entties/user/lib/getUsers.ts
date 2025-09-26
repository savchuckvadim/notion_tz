import { IUser } from "../type/user.type";

export const getUsers = async (): Promise<IUser[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json() as IUser[];
    return users;
}
