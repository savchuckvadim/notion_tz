import { IPost, IUser } from "@/modules/entties";


class Api {
    private readonly baseUrl = "https://jsonplaceholder.typicode.com";

    public async getUsers(): Promise<IUser[] | null> {
        const res = await fetch(`${this.baseUrl}/users`);
        debugger;
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json() as Promise<IUser[]>;
    }

    public async getPosts(): Promise<IPost[] | null> {
        const res = await fetch(`${this.baseUrl}/posts`);
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
    }

    public async getPostsByUserId(userId: number): Promise<IPost[] | null> {
        const res = await fetch(`${this.baseUrl}/posts?userId=${userId}`);
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
    }
}
export const api = new Api();
