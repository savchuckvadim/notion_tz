import { appData, getHomePageData } from "@/data";
import { HomeItems, IComment } from "@/modules/entties";
import { PageDescription, PageTitle } from "@/modules/shared";

export function HomePage({ comments }: { comments: IComment[] }) {
    return (
        <>
            <PageTitle title={getHomePageData()?.description || ''} />
            <PageDescription description={getHomePageData()?.task} size="lg" />
            <PageDescription description={getHomePageData()?.taskDiscription} size="xs" />
            <HomeItems comments={comments} />
        </>
    );
}
