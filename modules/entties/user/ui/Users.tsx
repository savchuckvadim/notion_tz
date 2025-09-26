import { IUser } from "../type/user.type";
import Link from "next/link";
import { SimpleCard } from "@/modules/shared";


export const Users = ({ users, postsCounts }: { users: IUser[], postsCounts: { userId: number, count: number }[] }) => {
    const countsMap: Record<number, number> = {};
    postsCounts.forEach(({ userId, count }) => {
        countsMap[userId] = count;
    });
    return (
        <div className="grid grid-cols-4  gap-2 sm:flex-row">
            {users.slice(0, 25).map((user: IUser) => (
                <Link href={`/users/${user.id}`} key={user.id}>
                    <SimpleCard
                        key={user.id}
                        title={user.name}
                        description={`Posts: ${countsMap[user.id] || 0}`}
                    >
                        <div className="flex flex-col gap-2 w-100">
                            <p>Email: {user.email}</p>
                            <p>Company: {user.company.name}</p>
                        </div>

                    </SimpleCard>
                </Link>
            ))}
        </div>
    )
}
