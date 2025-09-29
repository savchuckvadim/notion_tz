import { IPost, IUser, IComment } from "@/modules/entties";


class Api {
    private readonly baseUrl = "https://jsonplaceholder.typicode.com";

    public async getUsers(): Promise<IUser[] | null> {
        const res = await fetch(`${this.baseUrl}/users`);

        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json() as Promise<IUser[]>;
    }

    public async getPosts(cache: boolean): Promise<IPost[] | null> {
        const res = await fetch(`${this.baseUrl}/posts`, {
            cache: cache ? "force-cache" : "no-store",
        });
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
    }



    public async getPostsByUserId(userId: number): Promise<IPost[] | null> {
        const res = await fetch(`${this.baseUrl}/posts?userId=${userId}`);
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
    }

    public async getComments(): Promise<IComment[] | null> {
        const res = await fetch(`${this.baseUrl}/comments`);
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
    }

    public async sendPost(post: Partial<IPost>): Promise<{ id: number }> {
        const res = await fetch(`${this.baseUrl}/posts`, {
            method: "POST",
            body: JSON.stringify(post),
        });
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
    }
}
export const api = new Api();
