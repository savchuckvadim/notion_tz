import { UseDataTypeEnum } from "@/data";
import { PageLayout } from "@/modules/shared";

export const DashBoardPage = () => {
    return <PageLayout type={UseDataTypeEnum.DASHBOARD}>
        <p>Dashboard</p>
    </PageLayout>;
}
