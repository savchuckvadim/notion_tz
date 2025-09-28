'use client'
import { IUser } from "@/modules/entties/user/type/user.type";
import { ProfileUser } from "./components/ProfileUser";

export const Profile = ({ user,
    posts,
    todos,
    comments,
    updateCurrentUser,
}: { user: IUser, posts: number, todos: number, comments: number, updateCurrentUser: () => void }) => {


    return <div className="grid grid-cols-1 min-h-full ">
        <ProfileUser
            user={user}
            posts={posts}
            todos={todos}
            comments={comments}
            updateCurrentUser={updateCurrentUser}
        />

    </div>;
}
