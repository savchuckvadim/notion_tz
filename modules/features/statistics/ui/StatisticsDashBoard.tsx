"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/modules/shared/shadcn";

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

        {/* <StatisticsDashBoardCards
            posts={posts}
            todos={todos}
            comments={comments}
        /> */}

        <StatisticsChart posts={posts} todos={todos} comments={comments} />
        {/* <StatisticsChart posts={posts} todos={todos} comments={comments} /> */}
    </div >;
}
