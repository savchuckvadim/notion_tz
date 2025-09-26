

// Server-Side Rendering (SSR) - каждый запрос тянет новые данные

import { getPosts } from "@/modules/entties/posts/lib/getPosts";
import { PostsPage } from "@/modules/pages";

export default async function Posts() {

    const posts = await getPosts({ cache: false });

    return <PostsPage posts={posts} />;
}
