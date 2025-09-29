"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/modules/shared/shadcn";
import { ChartConfig, ChartContainer, ChartTooltip } from "@/modules/shared/shadcn/components/ui/chart";
import { ChartTooltipContent } from "@/modules/shared/shadcn/components/ui/chart";
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"




const chartConfig = {
    desktop: {
        label: "count",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export const StatisticsChart = ({
    posts,
    todos,
    comments,
}: {
    posts: number;
    todos: number;
    comments: number;
}) => {
    const chartData = [
        { property: "Posts", count: posts },
        { property: "Todos", count: todos },
        { property: "Comments", count: comments },

    ]
    return (
        <Card >
            <CardHeader>
                <CardTitle>Статистика Пользователя</CardTitle>
                < CardDescription > Посты, TODO, Комментарии</CardDescription>
            </CardHeader>
            < CardContent >
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData} >
                        <CartesianGrid vertical={false} />
                        < XAxis
                            dataKey="property"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        < ChartTooltip
                            cursor={false}
                            content={< ChartTooltipContent hideLabel />}
                        />
                        < Bar dataKey="count" fill="var(--color-count)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            < CardFooter className="flex-col items-start gap-2 text-sm" >
                <div className="flex gap-2 leading-none font-medium" >
                    Trending up by 5.2 % this month < TrendingUp className="h-4 w-4" />
                </div>
                < div className="text-muted-foreground leading-none" >
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}
