import { IUser } from "@/modules/entties/user/type/user.type";
import { CardHeader, CardContent, Card, CardTitle, Button } from "@/modules/shared/shadcn";
import { Cat, User } from "lucide-react";
import Link from "next/link";

export const Profile = ({ user,
    posts,
    todos,
    comments,
}: { user: IUser, posts: number, todos: number, comments: number }) => {
    return <div className="grid grid-cols-1 min-h-full ">
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between">
                        <p className="flex items-center gap-2">
                            <User size={50} className="text-primary" /> {user.name}
                        </p>
                        <Button variant="outline">
                            <Link href={`/users/${user.id}`}>
                                <Cat size={50} className="text-primary" />
                            </Link>
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 flex flex-row justify-between gap-1">
                <div className="space-y-2">
                    <p><span className="font-semibold">Name:</span> {user.name}</p>
                    <p><span className="font-semibold">Email:</span> {user.email}</p>
                    <p><span className="font-semibold">Company:</span> {user.company.name}</p>
                    <p><span className="font-semibold">Posts:</span> {user.company.bs}</p>
                    <p><span className="font-semibold">Todos:</span> {user.company.catchPhrase}</p>
                    <p><span className="font-semibold">Comments:</span> {user.company.bs}</p>
                    <p><span className="font-semibold">Website:</span> {user.website}</p>
                    <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                    <p><span className="font-semibold">Address:</span> {user.address.city}</p>
                    <p><span className="font-semibold">Zipcode:</span> {user.address.zipcode}</p>
                    <p><span className="font-semibold">Street:</span> {user.address.street}</p>
                    <p><span className="font-semibold">Suite:</span> {user.address.suite}</p>
                    <p><span className="font-semibold">City:</span> {user.address.city}</p>
                    <p><span className="font-semibold">Lat:</span> {user.address.geo.lat}</p>

                </div>
                <Card className="space-y-1 p-1 mr-16 w-1/3 h-[95px] bg-primary/22">
                    <CardContent className="space-y-1 ">
                        <p><span className="font-semibold">Posts Total Month:</span> {posts}</p>
                        <p><span className="font-semibold">Todos Total Month:</span> {todos}</p>
                        <p><span className="font-semibold">Comments Total Month:</span> {comments}</p>
                    </CardContent>
                </Card>
            </CardContent>

        </Card> </div>;
}
