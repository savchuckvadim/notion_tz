'use client'
import { useEffect, useState } from "react"
import { UseDataTypeEnum } from "@/data"
import { IUser } from "@/modules/entties"
import { IPost } from "@/modules/entties/posts/type/posts.type"
import { PageLayout } from "@/modules/shared/ui/page-layout/PageLayout"

import { AddPost, UserPosts } from "@/modules/widgetes"

export const UserPage = ({ user, posts }: { user: IUser, posts: IPost[] }) => {
    const [allPosts, setAllPosts] = useState(posts)

    useEffect(() => {
        setAllPosts(posts)
    }, [posts])

    return (
        <PageLayout
            type={UseDataTypeEnum.USERS}
            title={user.name}
            task={user.email}
            taskDiscription={user.company.name}
        >
            <AddPost
                posts={allPosts}
            />
            <UserPosts
                allPosts={allPosts}
                user={user}
            />


        </PageLayout>
    )
}
