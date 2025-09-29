"use client"
import { AddPostInitButton, AddPostModal } from "@/modules/features"
import { PageTitle } from "@/modules/shared"
import { SetStateAction, Dispatch, useState } from "react"
import { IPost } from "@/modules/entties/posts/type/posts.type"

export const AddPost = ({ posts, setAllPosts }: { posts: IPost[], setAllPosts: Dispatch<SetStateAction<IPost[]>>}) => {
    const [showAddPost, setShowAddPost] = useState(false)
 
    return (
        <>
            <div className="my-4 flex flex-row items-center justify-between">
                <PageTitle title={`Posts: ${posts.length}`} />
                <div>
                    <AddPostInitButton showAddPost={showAddPost} setShowAddPost={setShowAddPost} />
                </div>
            </div>

            <AddPostModal
                open={showAddPost}
                setOpen={setShowAddPost}
                onSend={(createdPost) => setAllPosts((prev) => [createdPost, ...prev])}

            />
        </>
    )
}
