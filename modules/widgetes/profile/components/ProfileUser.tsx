import { IUser } from "@/modules/entties/user/type/user.type";
import { ProfileUserStatisics } from "./ProfileUserStatisics";
import { ProfileUserContent } from "./ProfileUserContent";



export const ProfileUser = ({
    posts,
    todos,
    comments,
    user,
    updateCurrentUser,
}: { user: IUser, updateCurrentUser: () => void, posts: number, todos: number, comments: number }) => {
    return (
        <ProfileUserContent user={user} updateCurrentUser={updateCurrentUser} >
            <ProfileUserStatisics posts={posts} todos={todos} comments={comments} />
        </ProfileUserContent>
    )
}
