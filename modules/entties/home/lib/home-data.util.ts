import { IComment } from "../type/home.type";

export const getHomeData = async (): Promise<IComment[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = (await res.json()) as IComment[];
    return comments;
}
