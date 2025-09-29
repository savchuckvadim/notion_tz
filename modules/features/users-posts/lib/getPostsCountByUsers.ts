import { getPostsByUserId, IUser } from "@/modules/entties";
import { IUsersPostsCount } from "../type/posts.type";

export const getPostsByUsers = async (users: IUser[]): Promise<IUsersPostsCount[]> => {
    const postsCounts = await Promise.all(
        users.map(async (user: any) => {

            const posts = await getPostsByUserId(user.id);
            return { userId: user.id, userName: user.name, count: posts.length };
        })
    );
    return postsCounts;
}

