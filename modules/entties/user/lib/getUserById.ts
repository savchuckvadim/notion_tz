import { IUser } from "../type/user.type";

export const getUserById = async (id: number): Promise<IUser> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        next: { revalidate: 10 }, // 🔑 раз в 10 сек пересборка
    });
    const user = await res.json() as IUser;
    return user;
}
