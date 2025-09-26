import { getDashboardPageData, getHomePageData, getPostsPageData, getUsersPageData } from "../app";


export enum UseDataTypeEnum {
    USERS = "users",
    POSTS = "posts",
    DASHBOARD = "dashboard",
    HOME = "home",
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
        default:
            return null;
    }
}
