"use client"
import { StatisticsChart } from "./StatisticsChart";





export const StatisticsDashBoard = ({
    posts,
    todos,
    comments,
}: {
    posts: number;
    todos: number;
    comments: number;
}) => {


    return <div className="">

        <StatisticsChart posts={posts} todos={todos} comments={comments} />

    </div >;
}
