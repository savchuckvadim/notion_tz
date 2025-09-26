import { Card, CardDescription, CardHeader, CardTitle } from "@/modules/shared/shadcn/components/ui/card"
import { IComment } from "../type/home.type"
import { HomeItemCard } from "./HomeItemCard"

export const HomeItems = ({ comments }: { comments: IComment[] }) => {
    return (
        <div className="grid grid-cols-3  gap-2 sm:flex-row">
            {
                comments.map((comment: IComment) => (
                    <HomeItemCard key={`home-item-card-${comment.id}`} comment={comment} />
                ))
            }
        </div>
    )
}
