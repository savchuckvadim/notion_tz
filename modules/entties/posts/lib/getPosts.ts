import { IPost } from "../type/posts.type";
import { api } from "@/modules/shared/services";

export const getPosts = async ({ cache }: { cache: boolean }): Promise<IPost[]> => {
    const posts = await api.getPosts() as IPost[];
    return posts;
}


export const getPostsByUserId = async (userId: number): Promise<IPost[]> => {
    const posts = await api.getPostsByUserId(userId) as IPost[];
    return posts;
}

