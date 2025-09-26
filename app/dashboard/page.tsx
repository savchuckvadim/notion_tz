import { DashBoardPage } from "@/modules/pages";

export default function DashBoard({ params }: { params: Promise<{ id: string }> }) {

    return <DashBoardPage />;
}
