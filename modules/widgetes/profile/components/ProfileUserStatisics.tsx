'use client'
import { CardContent, Card } from "@/modules/shared/shadcn";



export const ProfileUserStatisics = ({
    posts,
    todos,
    comments,

}: { posts: number, todos: number, comments: number, }) => {

    return <Card className="space-y-1 p-1 mr-16 w-1/3 h-[95px] bg-primary/22">
        <CardContent className="space-y-1 ">
            <p><span className="font-semibold">Posts:</span> {posts}</p>
            <p><span className="font-semibold">Todos:</span> {todos}</p>
            <p><span className="font-semibold">Comments:</span> {comments}</p>
        </CardContent>
    </Card>;
}
