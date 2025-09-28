import { api } from "@/services/api";
import { IUser } from "../type/user.type";
import { useQuery } from "@tanstack/react-query";


export interface IUseTanstackUsers {
    data: IUser[];
    isLoading: boolean;
    isError: boolean;
}
export const useTanstackUsers = (): IUseTanstackUsers => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["users"],
        queryFn: api.getUsers,
    });
    debugger;
    return { data: data || [], isLoading, isError };
}
