"use client"
import { AddPostInitButton, AddPostModal } from "@/modules/features"
import { PageTitle } from "@/modules/shared"
import { useEffect, useState } from "react"
import { IPost } from "@/modules/entties/posts/type/posts.type"

export const AddPost = ({ posts }: { posts: IPost[] }) => {
    const [showAddPost, setShowAddPost] = useState(false)
    const [allPosts, setAllPosts] = useState(posts)
    useEffect(() => {
        setAllPosts(posts)
    }, [posts])


    return (
        <>
            <div className="my-4 flex flex-row items-center justify-between">
                <PageTitle title={`Posts: ${allPosts.length}`} />
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
