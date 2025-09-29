// ISR - гибрид: статика + обновление через revalidate

import { UsersPage } from "@/modules/pages";
import { getUsers } from "@/modules/entties";
import { getPostsByUsers } from "@/modules/features";

export default async function Users() {

    const users = await getUsers();
    const postsCounts = await getPostsByUsers(users);



    return <UsersPage users={users} postsCounts={postsCounts} />;
}
