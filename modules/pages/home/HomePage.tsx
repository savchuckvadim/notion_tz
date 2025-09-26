import { appData, getHomePageData, UseDataTypeEnum } from "@/data";
import { HomeItems, IComment } from "@/modules/entties";
import { PageDescription, PageLayout, PageTitle } from "@/modules/shared";

export function HomePage({ comments }: { comments: IComment[] }) {
    return (
        <PageLayout type={UseDataTypeEnum.HOME}>
            <HomeItems comments={comments} />
        </PageLayout>
    );
}
