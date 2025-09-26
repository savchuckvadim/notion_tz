

// ISR - гибрид: статика + обновление через revalidate

import { UsersPage } from "@/modules/pages";
import { getPostsByUserId, getUsers } from "@/modules/entties";

export default async function Users() {

    const users = await getUsers();
    const postsCounts = await Promise.all(
        users.map(async (user: any) => {

            const posts = await getPostsByUserId(user.id);
            return { userId: user.id, count: posts.length };
        })
    );



    return <UsersPage users={users} postsCounts={postsCounts} />;
}
