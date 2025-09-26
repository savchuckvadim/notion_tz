import { UseDataTypeEnum } from "@/data"
import { IPost } from "@/modules/entties/posts/type/posts.type"
import { PageLayout, SimpleCard } from "@/modules/shared"

export const PostsPage = ({ posts }: { posts: IPost[] }) => {
    return (
        <PageLayout type={UseDataTypeEnum.POSTS}>
            <div className="grid grid-cols-3  gap-2 sm:flex-row">
                {posts.slice(0, 5).map((p: any) => (
                    <SimpleCard key={`post-card-${p.id}`} title={p.title} description={p.body} children={<p>{p.body}</p>} />
                ))}
            </div>
        </PageLayout>
    )
}
