import { getHomeData } from "@/modules/entties";
import { HomePage } from "@/modules/pages";

// Static Site Generation (SSG) - статическая генерация на build

export default async function Home() {
    const comments = await getHomeData();
    return (
        <div className="bg-primary/20 min-h-[92vh]  font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center  p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <HomePage comments={comments} />
            </main>

        </div>
    );

}
