import { IPost } from "../type/posts.type";

export const getPosts = async ({ cache }: { cache: boolean }): Promise<IPost[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: cache ? "force-cache" : "no-store", // отключаем кэш → SSR
    });

    const posts = await res.json() as IPost[];
    return posts;
}


export const getPostsByUserId = async (userId: number): Promise<IPost[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await res.json() as IPost[];
    return posts;
}
