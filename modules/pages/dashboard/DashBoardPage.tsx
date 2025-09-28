'use client'
import { UseDataTypeEnum } from "@/data";
import { PageLayout } from "@/modules/shared";
import { useAppSelector } from "@/modules/app/model/hooks/redux";
import { useCurrentUser } from "@/modules/entties/user/hooks/useCurrentUser";
import { Profile } from "@/modules/widgetes";
import { StatisticsDashBoard } from "@/modules/features";



export const DashBoardPage = () => {

    const statistics = useAppSelector((state) => state.statistics);
    const {
        user,
        updateCurrentUser,
    } = useCurrentUser();
    const commentsCount = Math.floor(Math.random() * 100);


    return <PageLayout type={UseDataTypeEnum.DASHBOARD} >
        <div className="flex items-center justify-center w-[90vw]">
            <div className="grid grid-cols-2 gap-24 w-[80vw]">

                {user && <div className="m-0">
                    <Profile
                        user={user}
                        posts={statistics?.posts || 0}
                        todos={statistics?.todos || 0}
                        comments={commentsCount}
                        updateCurrentUser={updateCurrentUser}
                    />

                </div>}
                {statistics && <StatisticsDashBoard
                    posts={statistics.posts}
                    todos={statistics.todos}
                    comments={commentsCount}
                />}
            </div>
        </div>
    </PageLayout>

}
