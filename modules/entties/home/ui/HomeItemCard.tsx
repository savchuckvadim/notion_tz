import { Card, CardDescription, CardHeader, CardTitle } from "@/modules/shared/shadcn/components/ui/card"
import { IComment } from "../type/home.type"

export const HomeItemCard = ({ comment }: { comment: IComment }) => {
    return (
        <Card className="text-sm " key={comment.id}>  <CardHeader>
            <CardTitle>{
                <p className="text-sm font-bold">{comment.name}</p>
            }</CardTitle>
            <CardDescription >{comment.body}</CardDescription>
        </CardHeader>
        </Card>
    )
}
