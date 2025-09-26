

// ISR - гибрид: статика + обновление через revalidate

import { UsersPage } from "@/modules/pages/users/UsersPage";

export default async function Page() {
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



    return <div className="bg-primary/20 min-h-[92vh]  grid grid-rows-1 items-start justify-items-center  p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-5 row-start-2 items-center sm:items-start">
            <UsersPage users={users} postsCounts={postsCounts} />

        </main>

    </div>;
}
