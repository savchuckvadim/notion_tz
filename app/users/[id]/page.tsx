import { UserPage } from "@/modules/pages";
import { IPost } from "@/modules/entties";


// ISR - гибрид: статика + обновление через revalidate

export default async function User({ params }: { params: Promise<{ id: string }> }) {
    const param = await params;
    const id = param.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        next: { revalidate: 10 }, // 🔑 раз в 10 сек пересборка
    });
    const user = await res.json();

    // 🔹 для каждого юзера подтягиваем посты параллельно
    const postsRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
        { next: { revalidate: 10 } }
    );
    const posts = await postsRes.json() as IPost[]


    return <UserPage user={user} posts={posts} />;
}
