import { IPost } from "../type/posts.type";
import { api } from "@/modules/shared/services";

export const getPosts = async ({ cache }: { cache: boolean }): Promise<IPost[]> => {
    const posts = await api.getPosts(cache) as IPost[];
    return posts;
}



export const getPostsByUserId = async (userId: number): Promise<IPost[]> => {
    const posts = await api.getPostsByUserId(userId) as IPost[];
    return posts;
}

export const sendPost = async (post: Partial<IPost>): Promise<{id: number}> => {
    const result = await api.sendPost(post);
    return result;
}
