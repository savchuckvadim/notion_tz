import { api } from "@/services/api";
import { IUser } from "../type/user.type";
import { useQuery } from "@tanstack/react-query";


export interface IUseTanstackUsers {
    data: IUser[];
    isLoading: boolean;
    isError: boolean;
}
export const useTanstackUsers = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["users"],
        queryFn: async () => await api.getUsers(),
    });

    return { data: data || [], isLoading, isError };
}
