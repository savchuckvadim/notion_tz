import { getDashboardPageData, getHomePageData, getPostsPageData, getUsersPageData } from "../app";
import { getTanstackBonusPageData } from "./app-routing-data";


export enum UseDataTypeEnum {
    USERS = "users",
    POSTS = "posts",
    DASHBOARD = "dashboard",
    HOME = "home",
    TANSTACK_BONUS = "tanstack-bonus",
}

export const getData = (type: UseDataTypeEnum) => {
    switch (type) {
        case UseDataTypeEnum.USERS:
            return getUsersPageData();
        case UseDataTypeEnum.POSTS:
            return getPostsPageData();
        case UseDataTypeEnum.DASHBOARD:
            return getDashboardPageData();
        case UseDataTypeEnum.HOME:
            return getHomePageData();
        case UseDataTypeEnum.TANSTACK_BONUS:
            return getTanstackBonusPageData();
        default:
            return null;
    }
}
