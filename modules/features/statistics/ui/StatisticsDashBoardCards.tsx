"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/modules/shared/shadcn";



export const StatisticsDashBoardCards = ({
    posts,
    todos,
    comments,
}: {
    posts: number;
    todos: number;
    comments: number;
}) => {


    return <div className="grid grid-cols-3 gap-4">
        <Card className="text-center">
            <CardHeader>
                <CardTitle>Posts</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">{posts}</p>
            </CardContent>
        </Card>

        <Card className="text-center">
            <CardHeader>
                <CardTitle>Todos</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">{todos}</p>
            </CardContent>
        </Card>

        <Card className="text-center">
            <CardHeader>
                <CardTitle>Completed</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">
                    {comments}
                </p>
            </CardContent>
        </Card>

    </div>;
}
