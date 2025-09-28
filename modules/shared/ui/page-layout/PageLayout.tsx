import { getData, UseDataTypeEnum } from "@/data";
import { PageDescription, PageTitle } from "..";
import { SimpleCard } from "../cards/SimpleCard/SimpleCard";

export interface IPageLayoutProps {
    type: UseDataTypeEnum;
    title?: string;
    task?: string;
    taskDiscription?: string;
    children: React.ReactNode;
}
export const PageLayout = ({
    type,
    title,
    task,
    taskDiscription,
    children,
}: IPageLayoutProps) => {
    const data = getData(type);
    return (
        <div className="bg-primary/20 h-[94vh]  grid grid-rows-1 items-start justify-items-start  p-8 pb-20 gap-1 sm:p-20">
            <main className="flex flex-col gap-5 row-start-2 items-start sm:items-start">
                <PageTitle title={title || data?.description || ''} />
                <PageDescription description={task || data?.task} size="lg" />
                <PageDescription description={taskDiscription || data?.taskDiscription} size="xs" />
                {title
                    ? <SimpleCard children={children} />
                    : children
                }
            </main>
        </div>
    )
}
