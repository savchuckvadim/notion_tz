"use client"
import { useQuery } from "@tanstack/react-query";
import { IUser } from "@/modules/entties";
import { IUsersPostsCount } from "../type/posts.type";
import { getPostsByUsers } from "../lib/getPostsCountByUsers";

export interface IUseUsersPostsCounts {
    data: IUsersPostsCount[];
    isLoading: boolean;
    isError: boolean;
}
export const useUsersPostsCounts = (users: IUser[]): IUseUsersPostsCounts => {
    const { data, isLoading, isError } = useQuery<IUsersPostsCount[]>({
        refetchInterval: 10000,
        queryKey: ["usersPostsCounts"],
        queryFn: () => getPostsByUsers(users),
        enabled: true,
    });

    return { data: data || [], isLoading, isError };
}
