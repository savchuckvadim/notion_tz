import { IUser } from "@/modules/entties/user/type/user.type";
import { CardHeader, CardContent, Card, CardTitle, Button } from "@/modules/shared/shadcn";
import { Cat } from "lucide-react";




export const ProfileUserContent = ({ user, updateCurrentUser, children }: { user: IUser, updateCurrentUser: () => void, children: React.ReactNode }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between">
                        <p className="flex items-center gap-2">
                            <Cat size={50} className="text-primary" /> {user.name}
                        </p>
                        <Button variant="outline" onClick={updateCurrentUser}>

                            <Cat size={50} className="text-primary" />

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
                {children}
            </CardContent>

        </Card>
    )
}
