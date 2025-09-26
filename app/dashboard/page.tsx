
import { getDashboardPageData } from "@/data";
import { PageDescription, PageTitle, SimpleCard } from "@/modules/shared";

export default function Page({ params }: { params: Promise<{ id: string }> }) {


    return <div className="bg-primary/20 min-h-[92vh]  items-start justify-items-start  p-8 pb-20 sm:p-20">
        <main className="flex flex-col items-center sm:items-start">
            <PageTitle title={getDashboardPageData()?.description || ''} />
            <PageDescription description={getDashboardPageData()?.task} size="lg" />
            <PageDescription description={getDashboardPageData()?.taskDiscription} size="xs" />


        </main>

    </div>;
}
