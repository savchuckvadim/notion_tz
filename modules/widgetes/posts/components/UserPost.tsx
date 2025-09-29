"use client"
import { IPost } from "@/modules/entties/posts/type/posts.type"
import { SimpleCard } from "@/modules/shared"
import { IUser } from "@/modules/entties/user/type/user.type"
import { Cat } from "lucide-react"

export const UserPost = ({ post, user, }: { post: IPost, user: IUser }) => {
    return (
        <SimpleCard
            withCollapse={true}
            header={<div className="flex flex-row items-center justify-between gap-2">
                <p className="text-lg text-primary">{post.title}</p>


                <div className="flex flex-row items-center justify-end gap-2 rounded-full bg-primary/20 p-2">
                    <Cat size={20} className="text-primary" />
                    <p>{user.name}</p>
                </div>

            </div>}
            children={
                <div className="flex flex-col items-center justify-between gap-2">
                    <div className="w-full min-h-full rounded-sm overflow-hidden">
                        {post.img && <img src={post.img} alt="post-img" className="w-full h-full object-cover" />}
                    </div>
                    <div className="w-full min-h-full rounded-sm overflow-hidden bg-background/30 p-2">

                        <p>{post.body}</p>
                    </div>

                </div>

            } />
    )
}
