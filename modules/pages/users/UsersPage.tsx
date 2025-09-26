import { UseDataTypeEnum } from "@/data";
import { IUser, Users } from "@/modules/entties";
import { PageLayout } from "@/modules/shared";


export function UsersPage({ users, postsCounts }: { users: IUser[], postsCounts: { userId: number, count: number }[] }) {
    return (
        <PageLayout type={UseDataTypeEnum.USERS}>
            <Users users={users} postsCounts={postsCounts} />
        </PageLayout>
    );
}
