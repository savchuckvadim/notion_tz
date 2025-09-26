// ISR - гибрид: статика + обновление через revalidate

import { PageDescription, PageTitle, SimpleCard } from "@/modules/shared";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
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
    const posts = await postsRes.json()


    return <div className="bg-primary/20 min-h-[92vh]  grid grid-rows-1 items-start justify-items-center  p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-5 row-start-2 items-center sm:items-start">
            <PageTitle title={user.name} />
            <PageDescription description={user.email} size="lg" />
            <PageDescription description={user.company.name} size="xs" />


            <PageTitle title={`Posts: ${posts.length}`} />
            <div className="grid grid-cols-1  gap-2 sm:flex-row min-w-full">
                {posts.slice(0, 150).map((p: any) => (
                    <SimpleCard key={`post-card-${p.id}`} title={p.title} description={p.body} children={<p>{p.body}</p>} />
                ))}
            </div>
        </main>

    </div>;
}
