export interface IAppDataItem {

    title: string;
    description: string;
    image: string;
    link: string;
    task: string;
    taskDiscription: string;
    type: string;
}


export const appRoutingDataItems: IAppDataItem[] = [
    {
        title: "Home",
        description: "Home page",
        task: "SSG - статическая генерация на build",
        taskDiscription: "Статика генерируется на этапе build, а потом CDN раздаёт HTML.",
        type: "SSG",
        image: "/images/home.png",
        link: "/home",
    },
    {
        title: "Posts",
        description: "Posts page",
        task: "Posts page - SSR - динамическая генерация на запрос.",

        taskDiscription: "Posts page - SSR - динамическая генерация на запрос.",
        type: "SSR",
        image: "/images/posts.png",
        link: "/posts",
    },
    {
        title: "Users",
        description: "Users page",
        task: "Users page - ISR - гибрид: статика + обновление через revalidate",
        taskDiscription: "Users page - ISR - гибрид: статика + обновление через revalidate",
        type: "ISR",
        image: "/images/users.png",
        link: "/users",
    },
    {
        title: "Dashboard",
        description: "Dashboard page",
        task: "Dashboard page - CSR - данные только после загрузки React на клиенте",
        taskDiscription: "В модуле статистика осуществлен паттерн Listener c помощью Redux Toolkit",
        type: "CSR",
        image: "/images/dashboard.png",
        link: "/dashboard",
    },
    {
        title: "Tanstack Query",
        description: "Tanstack Query page",
        task: "CSR - данные только после загрузки React на клиенте",
        taskDiscription: "TanStack Query сам кэширует результат и управляет refetch/инвалидированием. Сейчас данные перезапрашиваются после каждого возвращения на страницу. Данные о постах юзеров рекэшируются через каждые 10 секунд Tanstackuery + Promise.all()",
        type: "CSR",
        image: "/images/tanstack-bonus.png",
        link: "/tanstack-bonus",
    },
];


export const getHomePageData = () => {
    return appRoutingDataItems.find((item) => item.link === "/home");
}
export const getPostsPageData = () => {
    return appRoutingDataItems.find((item) => item.link === "/posts");
}
export const getUsersPageData = () => {
    return appRoutingDataItems.find((item) => item.link === "/users");
}
export const getDashboardPageData = () => {
    return appRoutingDataItems.find((item) => item.link === "/dashboard");
}
export const getTanstackBonusPageData = () => {
    return appRoutingDataItems.find((item) => item.link === "/tanstack-bonus");
}
export const getPageData = (link: string) => {
    return appRoutingDataItems.find((item) => item.link === link);
}
