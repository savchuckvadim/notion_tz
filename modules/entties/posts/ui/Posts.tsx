import { IPost } from "@/modules/entties/posts/type/posts.type"
import { SimpleCard } from "@/modules/shared"

export const Posts = ({ posts }: { posts: IPost[] }) => {
    return (

        <div className="grid grid-cols-3  gap-2 sm:flex-row">
            {posts.slice(0, 5).map((p: any) => (
                <SimpleCard key={`post-card-${p.id}`} title={p.title} description={p.body} children={<p>{p.body}</p>} />
            ))}
        </div>

    )
}
