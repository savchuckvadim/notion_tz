import { appRoutingDataItems, IAppDataItem } from "./app-routing-data";

export interface IAppDataGeneral {
    brand: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

export interface IAppData {
    general: IAppDataGeneral;
    items: IAppDataItem[];
}

export const appDataGeneral: IAppDataGeneral = {
    brand: "Notion",
    title: "Notion",
    description: "Notion",
    image: "/images/home.png",
    link: "/",
};
export const appData: IAppData = {
    general: appDataGeneral,
    items: appRoutingDataItems,

};
