import { api } from "@/modules/shared";
import { IComment } from "../type/home.type";

export const getHomeData = async (): Promise<IComment[]> => {
    const comments = (await api.getComments()) as IComment[];
    return comments;
}
