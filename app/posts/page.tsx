

// Server-Side Rendering (SSR) - каждый запрос тянет новые данные

import { getPostsPageData } from "@/data";
import { PageDescription, PageTitle, SimpleCard } from "@/modules/shared";

export default async function PostsPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store", // отключаем кэш → SSR
    });
    const posts = await res.json();
    console.log(posts)
    return <div className="bg-primary/20 min-h-[92vh]   grid grid-rows-1 items-start justify-items-center  p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-5 row-start-2 items-center sm:items-start">
            <PageTitle title={getPostsPageData()?.description || ''} />
            <PageDescription description={getPostsPageData()?.task} size="lg" />
            <PageDescription description={getPostsPageData()?.taskDiscription} size="xs" />

            <div className="grid grid-cols-3  gap-2 sm:flex-row">
                {posts.slice(0, 5).map((p: any) => (
                    <SimpleCard key={`post-card-${p.id}`} title={p.title} description={p.body} children={<p>{p.body}</p>} />
                ))}
            </div>
        </main>

    </div>;
}
