import { api } from "@/services/api";
import { IUser } from "../type/user.type";

export const getUsers = async (): Promise<IUser[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await api.getUsers() as IUser[];
    console.log(users);
    return users;
}
