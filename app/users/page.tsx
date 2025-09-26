

// ISR - гибрид: статика + обновление через revalidate

import { UsersPage } from "@/modules/pages";

export default async function Users() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: { revalidate: 10 }, // 🔑 раз в 10 сек пересборка
    });
    const users = await res.json();

    // 🔹 для каждого юзера подтягиваем посты параллельно
    const postsCounts = await Promise.all(
        users.map(async (user: any) => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
                { next: { revalidate: 10 } }
            );
            const posts = await res.json();
            return { userId: user.id, count: posts.length };
        })
    );



    return <UsersPage users={users} postsCounts={postsCounts} />;
}
