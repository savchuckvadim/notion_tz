import { appData, getHomePageData, getUsersPageData } from "@/data";
import { IUser, Users } from "@/modules/entties";
import { PageDescription, PageTitle } from "@/modules/shared";


export function UsersPage({ users, postsCounts }: { users: IUser[], postsCounts: { userId: number, count: number }[] }) {
    return (
        <>
            <PageTitle title={getUsersPageData()?.description || ''} />
            <PageDescription description={getUsersPageData()?.task} size="lg" />
            <PageDescription description={getUsersPageData()?.taskDiscription} size="xs" />
            <Users users={users} postsCounts={postsCounts} />
        </>
    );
}
