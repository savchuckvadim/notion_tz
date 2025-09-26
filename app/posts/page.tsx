

// Server-Side Rendering (SSR) - каждый запрос тянет новые данные

import { PostsPage } from "@/modules/pages";

export default async function Posts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store", // отключаем кэш → SSR
    });
    const posts = await res.json();

    return <PostsPage posts={posts} />;
}
