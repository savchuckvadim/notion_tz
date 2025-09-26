import { UserPage } from "@/modules/pages";
import { IPost } from "@/modules/entties";
import { getPostsByUserId, getUserById } from "@/modules/entties";


// ISR - гибрид: статика + обновление через revalidate

export default async function User({ params }: { params: Promise<{ id: string }> }) {
    const param = await params;
    const id = param.id;

    const user = await getUserById(Number(id));
    const posts = await getPostsByUserId(Number(id)) as IPost[]


    return <UserPage user={user} posts={posts} />;
}
