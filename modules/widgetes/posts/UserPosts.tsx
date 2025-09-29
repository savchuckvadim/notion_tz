"use client"
import { IPost } from "@/modules/entties/posts/type/posts.type"
import { IUser } from "@/modules/entties/user/type/user.type"
import { UserPost } from "./components/UserPost"

export const UserPosts = ({ allPosts, user }: { allPosts: IPost[], user: IUser }) => {
    return (
        <div className="grid grid-cols-1  gap-2 sm:flex-row min-w-full">
            {allPosts.slice(0, 150).map((p: IPost, index: number) => (
                <UserPost key={`post-card-${p.id}-${index}`} post={p} user={user} />
            ))}
        </div>
    )
}
