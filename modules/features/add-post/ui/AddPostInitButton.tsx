import { Button } from "@/modules/shared/shadcn/components/ui"
import { Plus } from "lucide-react"

export const AddPostInitButton = ({ showAddPost, setShowAddPost }: { showAddPost: boolean, setShowAddPost: (showAddPost: boolean) => void }) => {
    return (
        <Button variant="outline" onClick={() => setShowAddPost(!showAddPost)}>
            <Plus size={20} className="text-primary" />
            <p>Add Post</p>
        </Button>
    )
}
