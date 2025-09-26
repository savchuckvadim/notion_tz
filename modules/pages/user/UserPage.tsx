import { UseDataTypeEnum } from "@/data"
import { IUser } from "@/modules/entties"
import { IPost } from "@/modules/entties/posts/type/posts.type"
import { PageTitle } from "@/modules/shared"
import { SimpleCard } from "@/modules/shared/ui/cards/SimpleCard/SimpleCard"
import { PageLayout } from "@/modules/shared/ui/page-layout/PageLayout"

export const UserPage = ({ user, posts }: { user: IUser, posts: IPost[] }) => {
    return (
        <PageLayout
            type={UseDataTypeEnum.USERS}
            title={user.name}
            task={user.email}
            taskDiscription={user.company.name}
        >
           <div className="my-4"> <PageTitle title={`Posts: ${posts.length}`} /></div>
            <div className="grid grid-cols-1  gap-2 sm:flex-row min-w-full">
                {posts.slice(0, 150).map((p: IPost) => (
                    <SimpleCard withCollapse={true} key={`post-card-${p.id}`} title={p.title} children={<p>{p.body}</p>} />
                ))}
            </div>
        </PageLayout>
    )
}
