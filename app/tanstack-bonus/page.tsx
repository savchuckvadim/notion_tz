"use client";

import { UseDataTypeEnum } from "@/data";
import { Users, useTanstackUsers } from "@/modules/entties";
import { useUsersPostsCounts } from "@/modules/features/";
import { PageLayout } from "@/modules/shared";




export default function TanstackPage() {
    const { data: users, isLoading, isError } = useTanstackUsers();
    debugger;
    const postsCounts = useUsersPostsCounts(users);

    if (isLoading) return <p className="text-gray-500">Загрузка...</p>;
    if (isError) return <p className="text-red-500">Ошибка!</p>;

    return (

        <PageLayout type={UseDataTypeEnum.TANSTACK_BONUS}>
            <Users users={users} postsCounts={postsCounts.data} />
        </PageLayout>

    );
}
