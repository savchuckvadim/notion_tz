import { getHomeData } from "@/modules/entties";
import { HomePage } from "@/modules/pages";

// Static Site Generation (SSG) - статическая генерация на build

export default async function Home() {
    const comments = await getHomeData();
    return <HomePage comments={comments} />;

}
