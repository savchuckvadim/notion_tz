'use client'
import { UseDataTypeEnum } from "@/data";
import { PageLayout } from "@/modules/shared";
import { useAppSelector } from "@/modules/app/model/hooks/redux";
import { useCurrentUser } from "@/modules/entties/user/hooks/useCurrentUser";
import { Profile } from "@/modules/widgetes";
import { StatisticsDashBoard, StatisticsDashBoardCards } from "@/modules/features";

export const DashBoardPage = () => {
    const statistics = useAppSelector((state) => state.statistics);
    const currentUser = useCurrentUser();
    const commentsCount = Math.floor(Math.random() * 100);
    return <PageLayout type={UseDataTypeEnum.DASHBOARD} >
        <div className="flex items-center justify-between w-[90vw]">
            <div className="grid grid-cols-2 gap-1 min-w-full">

                {currentUser && <div className="m-0">
                    <Profile
                        user={currentUser}
                        posts={statistics?.posts || 0}
                        todos={statistics?.todos || 0}
                        comments={commentsCount}
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
